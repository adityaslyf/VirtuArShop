'use client';

import { Card } from 'flowbite-react';

const CardWithList = () => {
  return (
    <Card>
     
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="#"
        >
          <p>
            View all
          </p>
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Utkarsh Sharma
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  Utkarsh@gmail.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ₹320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
               
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Pratham Saxena
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  pratham@gmail.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ₹3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
               
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Shubham Varshney
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  Shubham@gmail.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ₹67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Yogesh Gupta
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  yogesh@gmail.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ₹367
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
               
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Priyanhsu Singh
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  priyanshu@gmail.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ₹2367
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </Card>
  )
}
export default CardWithList;

