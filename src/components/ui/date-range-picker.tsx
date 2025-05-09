
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps {
  className?: string;
  setDates: (dates: DateRange | undefined) => void;
  dates?: DateRange;
  align?: "start" | "center" | "end";
}

export function DatePickerWithRange({
  className,
  setDates,
  dates,
  align = "start",
}: DatePickerWithRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !dates && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dates?.from ? (
              dates.to ? (
                <>
                  {format(dates.from, "LLL dd, y")} -{" "}
                  {format(dates.to, "LLL dd, y")}
                </>
              ) : (
                format(dates.from, "LLL dd, y")
              )
            ) : (
              <span>Select dates</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dates?.from}
            selected={dates}
            onSelect={setDates}
            numberOfMonths={2}
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
