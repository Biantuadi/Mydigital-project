import {
  BookIcon,
  CalendarIcon,
  ChevronRightIcon,
  TimerIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import "./Home.scss";

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
    <div className="home-container  w-full min-h-screen"
        style={{
          backgroundImage: "url(/home_imgs/backgrounds-a.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
      {/* Header */}
      <header className="header px-8 py-0 bg-[#fffbf1]">
        <div className="header__nav">
          <div className="header__welcome">
            BONJOUR PAULINE
          </div>

          <div className="header__logo">
            <span>LES AUDACIEUSES ACADEMIE</span>
            <img
              alt="Logo arc"
              src="/home_imgs/logo-arc.svg"
            />
          </div>

          <div className="header__buttons">
            <Button variant="ghost" size="icon">
              <CalendarIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <BookIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* Appointments Section */}
          <section className="section appointments">
            <h2 className="section__title">PROCHAINS RDV</h2>
            <Card className="appointments__card">
              <CardContent>
                <div className="appointments__list">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="appointments__item">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: appointment.dotColor }}
                        />
                        <span style={{ color: appointment.color }}>
                          {appointment.date}
                        </span>
                        <span style={{ color: appointment.color }}>
                          {appointment.time}
                        </span>
                      </div>
                      <h3>{appointment.title}</h3>
                      <p>{appointment.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Progression Section */}
          <section className="section progression">
            <h2 className="section__title">PROGRESSION</h2>
            <Card className="progression__card">
              <CardContent>
                <div className="progression__circle">
                  <div className="progression__circle-overlay">
                    <div className="h-full w-full bg-[url(/home_imgs/2.svg)] bg-cover bg-center" />
                  </div>
                  <div className="progression__circle-text">
                    <span>2/6</span>
                  </div>
                </div>
                <h3>Modules terminés</h3>
              </CardContent>
            </Card>
          </section>

          {/* Current Module Section */}
          <section className="section current-module">
            <div className="current-module__label">
              <span>Module en cours</span>
              <ChevronRightIcon className="h-6 w-6 -rotate-90" />
            </div>
            <Card className="current-module__card">
              <CardContent>
                <div className="current-module__image">
                  <img
                    alt="Current module"
                    src="/home_imgs/vector-7.png"
                  />
                </div>
                <div className="current-module__info">
                  <h3>Arbre de vie</h3>
                  <div className="current-module__duration">
                    <TimerIcon className="h-5 w-5" />
                    <span>1h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Recent Modules Section */}
        <section className="section recent-modules">
          <h2 className="section__title">DERNIERS MODULES CONSULTÉS</h2>
          <Card>
            <div className="modules__header">
              <div className="modules__header-link">
                <span>Voir tout les modules</span>
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </div>
            <CardContent>
              <div className="modules__grid">
                {modules.map((module) => (
                  <div key={module.id} className="modules__card">
                    <div className="modules__card-image">
                      <img
                        alt={module.title}
                        src={module.image}
                      />
                    </div>
                    <div className="modules__card-content">
                      <h3>{module.title}</h3>
                      <div className="modules__card-duration">
                        <TimerIcon className="h-5 w-5" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          Les Audacieuses Académie ©
        </div>
      </footer>
    </div>
  );
};
