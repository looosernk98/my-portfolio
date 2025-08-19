type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
  component?: string
  action?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  
  private log(level: LogLevel, message: string, data?: any, meta?: { component?: string; action?: string }) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      data,
      component: meta?.component,
      action: meta?.action
    }

    // Console logging with colors
    const colors = {
      debug: '\x1b[36m', // Cyan
      info: '\x1b[34m',  // Blue
      warn: '\x1b[33m',  // Yellow
      error: '\x1b[31m', // Red
    }
    const reset = '\x1b[0m'

    if (this.isDevelopment || level === 'error') {
      const prefix = `${colors[level]}[${level.toUpperCase()}]${reset}`
      const component = meta?.component ? ` [${meta.component}]` : ''
      const action = meta?.action ? ` (${meta.action})` : ''
      
      console.log(`${prefix}${component}${action} ${message}`, data || '')
    }

    // Store logs in sessionStorage for debugging (only in development)
    if (this.isDevelopment && typeof window !== 'undefined') {
      try {
        const logs = this.getLogs()
        logs.push(entry)
        // Keep only last 100 logs to prevent memory issues
        if (logs.length > 100) {
          logs.shift()
        }
        sessionStorage.setItem('portfolio_logs', JSON.stringify(logs))
      } catch (error) {
        console.warn('Failed to store log in sessionStorage:', error)
      }
    }
  }

  debug(message: string, data?: any, meta?: { component?: string; action?: string }) {
    this.log('debug', message, data, meta)
  }

  info(message: string, data?: any, meta?: { component?: string; action?: string }) {
    this.log('info', message, data, meta)
  }

  warn(message: string, data?: any, meta?: { component?: string; action?: string }) {
    this.log('warn', message, data, meta)
  }

  error(message: string, error?: any, meta?: { component?: string; action?: string }) {
    this.log('error', message, error, meta)
  }

  // User interaction logging
  trackUserAction(action: string, component: string, data?: any) {
    this.info(`User action: ${action}`, data, { component, action })
  }

  // Performance logging
  trackPerformance(operation: string, duration: number, component?: string) {
    this.info(`Performance: ${operation} took ${duration}ms`, { duration }, { component, action: 'performance' })
  }

  // Navigation logging
  trackNavigation(from: string, to: string) {
    this.info(`Navigation: ${from} -> ${to}`, { from, to }, { component: 'Navigation', action: 'navigate' })
  }

  // Component lifecycle logging
  trackComponentMount(component: string) {
    this.debug(`Component mounted: ${component}`, undefined, { component, action: 'mount' })
  }

  trackComponentUnmount(component: string) {
    this.debug(`Component unmounted: ${component}`, undefined, { component, action: 'unmount' })
  }

  // API/Data logging
  trackDataFetch(endpoint: string, duration?: number) {
    this.info(`Data fetch: ${endpoint}${duration ? ` (${duration}ms)` : ''}`, { endpoint, duration }, { action: 'data-fetch' })
  }

  // Animation logging
  trackAnimation(animationType: string, component: string, duration?: number) {
    this.debug(`Animation: ${animationType}${duration ? ` (${duration}ms)` : ''}`, { animationType, duration }, { component, action: 'animation' })
  }

  // Form logging
  trackFormSubmission(formName: string, success: boolean, data?: any) {
    this.info(`Form submission: ${formName} - ${success ? 'Success' : 'Failed'}`, data, { component: formName, action: 'form-submit' })
  }

  // Get stored logs (for debugging)
  getLogs(): LogEntry[] {
    if (typeof window === 'undefined') return []
    try {
      const logs = sessionStorage.getItem('portfolio_logs')
      return logs ? JSON.parse(logs) : []
    } catch (error) {
      console.warn('Failed to retrieve logs from sessionStorage:', error)
      return []
    }
  }

  // Clear logs
  clearLogs() {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('portfolio_logs')
        this.info('Logs cleared', undefined, { action: 'clear-logs' })
      } catch (error) {
        console.warn('Failed to clear logs:', error)
      }
    }
  }

  // Export logs for debugging
  exportLogs(): string {
    const logs = this.getLogs()
    return JSON.stringify(logs, null, 2)
  }
}

// Create singleton logger instance
export const logger = new Logger()

// Helper hooks for React components
export const useLogger = (componentName: string) => {
  const componentLogger = {
    debug: (message: string, data?: any, action?: string) => 
      logger.debug(message, data, { component: componentName, action }),
    info: (message: string, data?: any, action?: string) => 
      logger.info(message, data, { component: componentName, action }),
    warn: (message: string, data?: any, action?: string) => 
      logger.warn(message, data, { component: componentName, action }),
    error: (message: string, error?: any, action?: string) => 
      logger.error(message, error, { component: componentName, action }),
    trackUserAction: (action: string, data?: any) => 
      logger.trackUserAction(action, componentName, data),
    trackPerformance: (operation: string, duration: number) => 
      logger.trackPerformance(operation, duration, componentName),
    trackAnimation: (animationType: string, duration?: number) => 
      logger.trackAnimation(animationType, componentName, duration),
    onMount: () => logger.trackComponentMount(componentName),
    onUnmount: () => logger.trackComponentUnmount(componentName),
  }

  return componentLogger
}

// Error boundary logger
export const logError = (error: Error, errorInfo?: any, component?: string) => {
  logger.error(
    `Unhandled error: ${error.message}`, 
    { 
      error: error.toString(), 
      stack: error.stack, 
      errorInfo 
    }, 
    { component: component || 'ErrorBoundary' }
  )
}

// Development helpers
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Expose logger to window for debugging
  (window as any).portfolioLogger = {
    logger,
    getLogs: () => logger.getLogs(),
    clearLogs: () => logger.clearLogs(),
    exportLogs: () => logger.exportLogs(),
  }
}
