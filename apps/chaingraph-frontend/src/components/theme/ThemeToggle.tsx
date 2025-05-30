/*
 * Copyright (c) 2025 BadLabs
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSE.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License, use of this software will be governed by the Apache License, version 2.0.
 */

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-3 left-1 p-2 rounded-full bg-surface-light dark:bg-surface-dark
                 border border-gray-200 dark:border-gray-700 shadow-lg
                 hover:scale-110 active:scale-95 transition-transform"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        rotate: theme === 'dark' ? 360 : 0,
      }}
      transition={{ duration: 0.2, type: 'spring' }}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 0 : 1,
            scale: theme === 'dark' ? 0 : 1,
            rotate: theme === 'dark' ? -45 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <SunIcon className="w-4 h-4 text-yellow-500" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 45,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <MoonIcon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>

      {/* Animated background glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-300
                    ${theme === 'dark'
      ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-100'
      : 'bg-gradient-to-r from-yellow-200/20 to-orange-300/20 opacity-100'
    }`}
      />

    </motion.button>
  )
}
