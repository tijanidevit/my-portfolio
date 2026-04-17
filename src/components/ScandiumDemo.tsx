import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, XCircle, Loader2, Terminal, Globe, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ScandiumDemo() {
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState('https://api.example.com/v1/users');

  const runTest = async () => {
    setStatus('running');
    setLogs([]);
    
    const steps = [
      "Initializing distributed worker...",
      "Resolving DNS for api.example.com...",
      "Establishing secure connection (TLS 1.3)...",
      "Sending GET request to /v1/users...",
      "Received response: 200 OK (142ms)",
      "Validating JSON schema...",
      "Checking data integrity...",
      "Test suite 'User Management' passed."
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setLogs(prev => [...prev, step]);
    }
    
    setStatus('success');
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl border border-accent/20">
      {/* Header */}
      <div className="bg-foreground/5 px-6 py-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="ml-4 text-xs font-mono text-muted-foreground">Scandium API Tester v2.4</span>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <Globe size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Production Node: US-East</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Globe size={16} />
            </div>
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              disabled={status === 'running'}
              className="w-full bg-background/50 border border-border rounded-xl py-3 pl-12 pr-4 text-sm font-mono focus:border-accent outline-none transition-all"
            />
          </div>
          <button
            onClick={runTest}
            disabled={status === 'running'}
            className={cn(
              "w-full sm:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0",
              status === 'running' 
                ? "bg-muted text-muted-foreground cursor-not-allowed" 
                : "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
            )}
          >
            {status === 'running' ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
            {status === 'running' ? "Running..." : "Run Test"}
          </button>
        </div>

        {/* Console Output */}
        <div className="bg-black/40 rounded-2xl p-4 sm:p-6 font-mono text-[10px] sm:text-xs min-h-[240px] relative overflow-hidden border border-white/5">
          <div className="absolute top-4 right-4 opacity-20">
            <Terminal size={40} />
          </div>
          
          <div className="space-y-2">
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex items-start gap-2 sm:gap-3",
                    log.includes('passed') ? "text-accent-secondary" : "text-foreground/70"
                  )}
                >
                  <span className="text-muted-foreground shrink-0 hidden sm:inline">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                  <span className="break-all">{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {status === 'idle' && (
              <div className="text-muted-foreground animate-pulse">
                _ Waiting for input...
              </div>
            )}
          </div>

          {/* Status Overlay */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <CheckCircle2 size={48} className="text-accent-secondary mb-4 sm:w-16 sm:h-16" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">Test Passed Successfully</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">All 12 assertions passed in 842ms</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 glass rounded-full text-[10px] sm:text-xs font-bold hover:bg-foreground/5 transition-colors"
                >
                  Reset Console
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="bg-foreground/5 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono text-muted-foreground border-t border-border">
        <div className="flex gap-3 sm:gap-4">
          <span>WORKERS: 12 ACTIVE</span>
          <span>LATENCY: 142ms</span>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <span>CPU: 12%</span>
          <span>MEM: 256MB</span>
        </div>
      </div>
    </div>
  );
}
