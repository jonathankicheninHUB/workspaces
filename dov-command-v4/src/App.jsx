import React, { useState } from 'react';
import { CONFIG } from './data/config';
import { Terminal, ShieldCheck, Activity } from 'lucide-react'; // Icônes Pro

function App() {
  const [status, setStatus] = useState("SYSTEM READY");

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e0e0] flex font-sans">
      
      {/* SIDEBAR (Futur Composant) */}
      <aside className="w-64 bg-[#13141b] border-r border-[#2d2e3a] p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 font-bold text-white mb-6">
          <div className="w-2 h-2 rounded-full bg-[#00f090] shadow-[0_0_8px_#00f090]"></div>
          DOV COMMAND <span className="opacity-50 font-normal">V4.0</span>
        </div>
        
        <div className="text-[10px] font-bold text-[#555] uppercase tracking-wider">OPERATIONS</div>
        <button className="flex items-center gap-2 bg-[#2979ff] text-white p-2 rounded text-xs font-bold hover:bg-blue-600 transition">
          <Terminal size={14} /> DASHBOARD
        </button>
        <button className="flex items-center gap-2 border border-[#333] text-[#888] p-2 rounded text-xs font-bold hover:text-white transition">
           WAR ROOM
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 bg-gradient-to-b from-[#0b0c10] to-[#08080a]">
        <header className="flex justify-between items-end border-b border-[#2d2e3a] pb-4 mb-6">
          <div>
            <h1 className="text-xl font-extrabold text-white">INITIALIZATION</h1>
            <div className="text-xs text-[#666] mt-1 flex items-center gap-2">
              <ShieldCheck size={12} className="text-[#00f090]" />
              ARCHITECTURE SECURED
            </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-bold text-[#888]">WAX PRICE REF</div>
             <div className="text-xl font-mono text-[#d500f9] font-bold">${CONFIG.PRIX.WAX_USD}</div>
          </div>
        </header>

        {/* EXEMPLE DE COMPOSANT CARD */}
        <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-[#13141b] border border-[#2d2e3a] p-4 rounded-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff9100]"></div>
                <div className="text-[10px] font-bold text-[#888]">RPC NODES LOADED</div>
                <div className="text-2xl font-mono text-white font-bold mt-1">{CONFIG.API.NODES.length}</div>
                <div className="text-[10px] text-[#666] mt-2 flex items-center gap-1">
                    <Activity size={10} /> NETWORK STABLE
                </div>
            </div>
        </div>

        <div className="p-4 bg-black border border-[#333] rounded font-mono text-xs text-[#0f0]">
            > {status}...<br/>
            > Architecture V4 Initialized.<br/>
            > Waiting for Modules injection...
        </div>
      </main>
    </div>
  );
}

export default App;
