"use client";
import { Datepicker } from "flowbite-react";
import { useState } from "react";
import { Button, Navbar } from "flowbite-react";



export function Calender() {

  const customTheme ={
    popup : {
      root: {
        inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
      },
      header: {
        selectors: {
          button: {
            base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          }
        }
      },
      footer: {
        button: {
          today : "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-indigo-800 dark:hover:bg-indigo-700",
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-1 focus:ring-indigo-300",
        },
        
      }
      
    },
    views: {
      days: {
        items: {
          item: {
            selected : "dark:bg-indigo-800 bg-cyan-700 text-white hover:bg-indigo-800"
          }
        }
      },
      months: {
        items: {
          item: {
            selected : "bg-indigo-800 text-white hover:bg-indigo-800"
          }
        }
      },
      years: {
        items: {
          item: {
            selected : "bg-indigo-800 text-white hover:bg-indigo-800"
          }
        }
      },
      decades: {
        items: {
          item : {
            selected : "bg-indigo-800 text-white hover:bg-indigo-800"
          }
        }
      }
    }
  }

    const [selectedDate, setSelectedDate] = useState<Date>()

    function handleDateChange(date: Date){
        setSelectedDate(date)
        console.log(date);
    }


  return (
    // <Flowbite theme={{ theme: customTheme }}>
      
        <Datepicker inline theme={customTheme} onSelectedDateChanged={handleDateChange} />

  )
}