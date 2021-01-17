import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  ,
  {
    title: 'Home',
    path: '/desc',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Students',
    path: '/etudiant',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Management',
        path: '/etudiant/gestion',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Statistiques',
        path: '/etudiant/stat',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teachers',
    
    path: '/enseignant',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Management',
        path: '/enseignant/gestion',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Statistiques',
        path: '/enseignant/stat',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
       
    ]
  },
  
  
  {
    title: 'Employees',
    path: '/admin',
    icon: <IoIcons.IoMdPeople />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Management',
        path: '/admin/gestion',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Statistiques',
        path: '/admin/stat',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
