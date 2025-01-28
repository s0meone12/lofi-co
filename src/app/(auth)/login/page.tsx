// import React from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// export default function page() {
//     const isLogin = "true";
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={isLogin ? 'login' : 'register'}
//         initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
//         transition={{ duration: 0.3 }}
//         className="space-y-8"
//       >
//         <div>Login page is displayed here.</div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

import React from 'react'

export default function page() {
  return (
    <div>login page is here</div>
  )
}

