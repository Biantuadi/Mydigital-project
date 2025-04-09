import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { RootState } from '../../store';
import { Button } from '../../components/ui/button';
import { mockModules } from '../../data/mockData';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-8 py-4 flex items-center justify-between border-b border-[#E5E5E5]">
        <div className="flex items-center gap-8">
          <span className="text-xl font-medium">BONJOUR {user?.prenom?.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-6">
          <img src="/calendar-icon.svg" alt="Calendar" className="w-6 h-6" />
          <img src="/notification-icon.svg" alt="Notifications" className="w-6 h-6" />
          <img src="/profile-icon.svg" alt="Profile" className="w-6 h-6" />
        </div>
      </header>

      {/* Logo */}
      <div className="flex justify-center py-8">
        <img src="/logo-arc.svg" alt="Les Audacieuses Académie" className="h-16" />
      </div>

      {/* Main Content */}
      <main className="px-8 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-4">
            <div className="bg-[#4A5D4A] rounded-[32px] p-8 text-white">
              <h2 className="text-2xl font-medium mb-6">PROCHAINS RDV</h2>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-white mt-2"></span>
                    <div>
                      <div className="text-lg">24 janvier 10:00 - 11:00</div>
                      <div className="font-medium">Point mensuel</div>
                      <p className="text-sm opacity-80 mt-1">
                        Revoir avec Laurène les derniers modules + compléter fiche de résultats afin d'établir les plus grands axes d'améliorations. Il faudra préparer en amont une liste de plusieurs...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/20 pb-4">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF8D6E] mt-2"></span>
                    <div>
                      <div className="text-lg">27 janvier 14:00 - 14:30</div>
                      <div className="font-medium">Exercice oral</div>
                      <p className="text-sm opacity-80 mt-1">
                        Petit entraînement sur l'aisance à s'exprimer devant un certain...
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-white mt-2"></span>
                    <div>
                      <div className="text-lg">02 Mars 09:15 - 12:00</div>
                      <div className="font-medium">Bilan annuel</div>
                      <p className="text-sm opacity-80 mt-1">
                        Dans le cadre de la procédure, nous allons procéder à la reco...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-4">
            <div className="bg-[#FF8D6E] rounded-[32px] p-8 text-white h-full">
              <h2 className="text-2xl font-medium mb-12">PROGRESSION</h2>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <svg className="w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="16"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="white"
                      strokeWidth="16"
                      strokeDasharray="553"
                      strokeDashoffset="368"
                      transform="rotate(-90 96 96)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <div className="text-4xl font-medium">2/6</div>
                      <div className="text-xl mt-2">Modules terminés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4">
            <div className="bg-[#FF8D6E] rounded-[32px] p-8 text-white h-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium">Module en cours</h2>
                <button className="p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/tree-of-life.jpg" 
                  alt="Arbre de vie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">Arbre de vie</h3>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V10L13 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>1h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-[#4A5D4A]">DERNIERS MODULES CONSULTÉS</h2>
            <button className="text-[#FF8D6E] font-medium flex items-center gap-2">
              Voir tout les modules
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {[
              { title: "Arbre de vie", duration: "1h" },
              { title: "Les autres et moi...", duration: "45m" },
              { title: "La portée réelle", duration: "2h" },
              { title: "Les autres et moi", duration: "30m" },
              { title: "En avant ça g...", duration: "1h45" },
            ].map((module, index) => (
              <div key={index} className="bg-white rounded-[32px] shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={`/module-${index + 1}.jpg`}
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#FF8D6E] mb-2">{module.title}</h3>
                  <div className="flex items-center gap-2 text-[#4A5D4A]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{module.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 mt-8">
        <div className="text-sm text-gray-500">Les Audacieuses Académie ©</div>
      </footer>
    </div>
  );
};