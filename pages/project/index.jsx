import CardProject from '@/components/Card/CardProject';
import DefaultLayout from '@/components/DefaultLayout';
import Project77 from '@/public/Imgs/77Days.png';
import ApiEcomerce from '@/public/Imgs/ApiEcomerce.png';
import CupBet from '@/public/Imgs/cupBet.png';
import MarinaSite from '@/public/Imgs/marianaSite.png';
import TasksList from '@/public/Imgs/taskList.png';

export default function Project() {
  const projects = [
    {
      data: '2023 - current',
      name: 'Api E-commerce',
      discription:
        'Projeto de um aplicativo de comércio eletrônico que demonstra operações CRUD.',
      url: 'https://github.com/Ar3secchim/crud-Ecommerce-App',
      image: [ApiEcomerce],
      flags: ['java', 'rabbitmq', 'mysql', 'jUnit'],
    },
    {
      data: 'Jul - 2023',
      name: 'Light Life',
      discription:
        'Um app que faz o rastramento de tasks (hábitos). Mostra ao usuário um dashboard das tasks e a porcetagem da execução daquelas tarefas.',
      url: 'https://github.com/Ar3secchim/light-life-web',
      image: [Project77],
      flags: ['mobile', 'nextJs', 'pwa', 'jest'],
    },
    {
      data: 'Jul - 2022',
      name: 'Task List ',
      discription:
        'Aplicativo destinado para o usuário anotar as tarefas pendentes.',
      url: 'https://github.com/Ar3secchim/tasks-list-react',
      image: [TasksList],
      flags: ['mobile', 'react', 'style component'],
    },
    {
      data: 'Jan - 20221',
      name: 'Site Marina Jóias',
      discription:
        'Uma landing page desenvolvida para captação de revendedoras de jóias.',
      url: 'https://github.com/Ar3secchim/site_marinaSemijoias',
      image: [MarinaSite],
      flags: ['css', 'web design', 'html'],
    },
    {
      data: 'Nov - 2021',
      name: 'CupBet',
      discription: 'Aplicação para realizar aposta de copa do mundo',
      url: 'https://github.com/Ar3secchim/challenge-fullStack-CupBet-web',
      image: [CupBet],
      flags: ['nodeJs', 'react'],
    },
  ];

  return (
    <DefaultLayout>
      <section className="gap-6 py-8 grid lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project) => (
          <CardProject
            data={project.data}
            name={project.name}
            discription={project.discription}
            url={project.url}
            image={project.image}
            flags={project.flags}
          />
        ))}
      </section>
    </DefaultLayout>
  );
}
