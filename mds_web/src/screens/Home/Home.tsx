import {
  BookIcon,
  CalendarIcon,
  ChevronRightIcon,
  TimerIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Data for upcoming appointments
const upcomingAppointments = [
  {
    id: 1,
    date: "24 janvier",
    time: "10:00 - 11:00",
    title: "Point mensuel",
    description:
      "Revoir avec Laurène les derniers modules + compléter fiche de résultats afin d'établie les plus grands axes d'améliorations. Il faudra préparer en amont une liste de plusiuers",
    color: "#7b677a",
    dotColor: "#7b677a",
  },
  {
    id: 2,
    date: "27 janvier",
    time: "14:00 - 14:30",
    title: "Exercice oral",
    description:
      "Petit entrainement sur l'aisance à s'exprimer devant un certain",
    color: "#ef7d4f",
    dotColor: "#ef7d4f",
  },
  {
    id: 3,
    date: "02 Mars",
    time: "09:15 - 12:00",
    title: "Bilan annuel",
    description:
      "Dans le cadre de la procédure, nous allons procéder à la reco",
    color: "#1c371c",
    dotColor: "#1c371c",
  },
  {
    id: 4,
    date: "02 Mars",
    time: "09:15 - 12:00",
    title: "Bilan annuel",
    description:
      "Dans le cadre de la procédure, nous allons procéder à la reco",
    color: "#1c371c",
    dotColor: "#1c371c",
  },
];

// Data for modules
const modules = [
  {
    id: 1,
    title: "Arbre de vie",
    duration: "1h",
    image: "/home_imgs/vector-7-1.png",
  },
  {
    id: 2,
    title: "Les autres et moi",
    duration: "45m",
    image: "/home_imgs/vector-7-2.png",
  },
  {
    id: 3,
    title: "La portée réelle",
    duration: "2h",
    image: "/home_imgs/vector-7-3.png",
  },
  {
    id: 4,
    title: "Les autres et moi",
    duration: "30m",
    image: "/home_imgs/vector-7-4.png",
  },
  {
    id: 5,
    title: "En avant ça grimpe",
    duration: "1h45",
    image: "/home_imgs/vector-7-5.png",
  },
  {
    id: 6,
    title: "Nom du module",
    duration: "1h45",
    image: "/home_imgs/vector-7-6.png",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div 
        className="w-full min-h-screen"
        style={{
          backgroundImage: "url(/home_imgs/backgrounds-a.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="flex flex-col w-full items-center relative">
          {/* Header */}
          <header className="w-full relative">
            <div className="flex h-20 items-center justify-between px-8 py-0 bg-[#fffbf1] shadow-sm">
              <div className="flex items-start gap-2.5">
                <div className="inline-flex items-center gap-10">
                  <div className="font-bold text-black text-lg">
                    BONJOUR PAULINE
                  </div>
                </div>
              </div>

              <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                  <div className="font-bold text-2xl tracking-[2.40px] text-black text-center">
                    LES AUDACIEUSES ACADEMIE
                  </div>
                  <img
                    className="h-16 w-auto"
                    alt="Logo arc"
                    src="/home_imgs/logo-arc.svg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center justify-center"
                >
                  <CalendarIcon className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center justify-center"
                >
                  <BookIcon className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center justify-center"
                >
                  <UserIcon className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="w-full px-8 py-6 flex flex-col gap-12">
            {/* Top Row */}
            <div className="flex gap-8 w-full">
              {/* Left Panel: Upcoming Appointments */}
              <div className="w-1/3 relative">
                <div className="relative z-10">
                  <div className="absolute -top-12 -left-14 w-64 h-64">
                    <img
                      className="w-full h-full"
                      alt="Background shape"
                      src="/home_imgs/vector-2.svg"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4 relative z-10">
                    PROCHAINS RDV
                  </h2>
                </div>

                <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <ChevronRightIcon className="w-6 h-6 text-gray-500" />
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="h-[350px] overflow-y-auto pr-2">
                      <div className="flex flex-col gap-6">
                        {upcomingAppointments.map((appointment, index) => (
                          <div 
                            key={appointment.id} 
                            className={`flex flex-col gap-1 ${
                              index < upcomingAppointments.length - 1 ? "border-b border-gray-200 pb-4" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: appointment.dotColor }}
                              />
                              <span 
                                className="text-sm font-semibold"
                                style={{ color: appointment.color }}
                              >
                                {appointment.date}
                              </span>
                              <span 
                                className="text-sm font-semibold"
                                style={{ color: appointment.color }}
                              >
                                {appointment.time}
                              </span>
                            </div>
                            <h3 className="text-base font-medium">
                              {appointment.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-3">
                              {appointment.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Middle Panel: Progression */}
              <div className="w-1/3 relative">
                <div className="relative z-10">
                  <div className="absolute -top-8 -left-12 w-48 h-48">
                    <img
                      className="w-full h-full"
                      alt="Background shape"
                      src="/home_imgs/vector.svg"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4 relative z-10">
                    PROGRESSION
                  </h2>
                </div>

                <Card className="bg-white rounded-2xl shadow-md h-[400px] flex flex-col items-center justify-center">
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="relative w-[200px] h-[200px] mb-6">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[url(/home_imgs/2.svg)] bg-cover bg-center"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-semibold text-[#ef7d4f]">2/6</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#ef7d4f] text-center">
                      Modules terminés
                    </h3>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel: Current Module */}
              <div className="w-1/3 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20">
                  <div className="bg-[#4A5D4A] text-white py-4 px-8 rotate-90 origin-left rounded-b-lg flex items-center gap-2">
                    <span className="text-xl font-bold whitespace-nowrap">Module en cours</span>
                    <ChevronRightIcon className="w-6 h-6 -rotate-90" />
                  </div>
                </div>

                <Card className="bg-white rounded-2xl shadow-md overflow-hidden mt-12">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Current module"
                        src="/home_imgs/vector-7.png"
                      />
                    </div>
                    <div className="p-4 flex flex-col items-center">
                      <h3 className="text-2xl font-semibold text-[#ef7d4f] mb-4">
                        Arbre de vie
                      </h3>
                      <div className="flex items-center gap-2">
                        <TimerIcon className="w-5 h-5" />
                        <span className="text-lg">1h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Row - Recent Modules */}
            <div className="w-full relative mt-8">
              <div className="relative z-10">
                <div className="absolute -top-20 -left-12 w-64 h-64">
                  <img
                    className="w-full h-full"
                    alt="Background shape"
                    src="/home_imgs/vector-1.svg"
                  />
                </div>
                <h2 className="text-xl font-bold text-white mb-4 relative z-10">
                  DERNIERS MODULES CONSULTÉS
                </h2>
              </div>

              <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="flex justify-end p-3 border-b">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm">Voir tout les modules</span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="overflow-x-auto">
                    <div className="flex gap-6 min-w-max pb-2">
                      {modules.map((module) => (
                        <div 
                          key={module.id}
                          className="flex flex-col w-[240px] bg-white rounded-xl shadow-md overflow-hidden"
                        >
                          <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                            <img
                              className="w-full h-full object-cover"
                              alt={module.title}
                              src={module.image}
                            />
                          </div>
                          <div className="p-4 flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-[#ef7d4f] mb-2">
                              {module.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <TimerIcon className="w-5 h-5" />
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full mt-auto">
            <div className="py-4 px-8 bg-[#fffbf1] text-center text-sm">
              Les Audacieuses Académie Ⓒ
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
