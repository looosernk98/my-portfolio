'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const workExperience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    startDate: "March 2022",
    endDate: null,
    description: "Leading development of enterprise-scale applications and mentoring junior developers."
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer", 
    location: "Remote",
    startDate: "June 2020",
    endDate: "February 2022",
    description: "Developed MVP and scaled the platform from 0 to 100k+ users."
  }
]

export default function WorkHistorySimple() {
  return (
    <section id="work-history" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="space-y-8">
          {workExperience.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  {job.position} at {job.company}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {job.startDate} - {job.endDate || 'Present'}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 