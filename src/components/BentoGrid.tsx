"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoItemProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  header?: React.ReactNode
  icon?: React.ReactNode
}

export const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "row-span-1 glass-card rounded-3xl group p-6 border border-white/[0.1] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {header && <div className="mb-4">{header}</div>}
        <div className="group-hover:translate-x-2 transition duration-200 mt-2">
          {icon && <div className="mb-2 text-blue-400">{icon}</div>}
          <div className="font-bold text-slate-100 mb-1">
            {title}
          </div>
          <div className="font-normal text-slate-400 text-xs">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
