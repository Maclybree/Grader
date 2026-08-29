"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function MarkEntryTable({ students, assessment }: any) {
  const [marks, setMarks] = useState<Record<string, number>>({})
  const supabase = createClient()
  return <div>Mark Table for {assessment?.name}</div>
}
