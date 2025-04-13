import { useState } from "react";
import './App.css';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  );

  let teamStrength = 0
  let teamAgility = 0

  const handleAddFighter = (fighter) => {
    if(money > fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money-fighter.price);
    };
  }

  team.forEach((member)=>{
    teamStrength+=member.strength;
    teamAgility+=member.agility;
  });

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>
      <h3>Team:</h3>
      <ul>
        {team.map((member, index) => {
          return (
            <li key={index}>
              <img src={String(member.img)} alt={member.id} />
              <br/><sup>Member {index+1}</sup>
              <br/><strong>{member.name}</strong>
              <br/><sub>Strength: {member.strength}</sub>
              <br/><sub>Agility: {member.agility}</sub>
            </li>
          );
        })}
      </ul>
      <sub>Pick some team members</sub>
      <ul>
        {zombieFighters.map((fighter, index) => {
          return (
            <li key={index}>
              <img src={String(fighter.img)} alt={fighter.id} />
              <h4> {fighter.name}</h4>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.strength}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App
