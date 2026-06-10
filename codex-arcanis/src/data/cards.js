export const cardSet = {
  title: 'Codex Arcanis',
  description:
    'Test your knowledge of official Dungeons & Dragons lore across monsters, spells, deities, planes, and legendary items. Flip each card to reveal the answer, then draw a new card at random.',
}

const cards = [
  {
    id: 1,
    type: 'monster',
    question: 'What legendary undead sorcerer rules the Tomb of Horrors?',
    answer:
      'Acererak, a demilich who abandoned his physical form and preserved only his skull. He devours the souls of adventurers who enter his tomb, using them to fuel his climb toward true godhood.',
  },
  {
    id: 2,
    type: 'monster',
    question: 'What makes a Beholder uniquely terrifying in combat?',
    answer:
      'Its central eye projects an antimagic cone that suppresses all spells and magic items in front of it. Each of its many eyestalks fires a different magical ray including petrification, disintegration, and death.',
  },
  {
    id: 3,
    type: 'monster',
    question: 'What is a Mind Flayer and what do they feed on?',
    answer:
      'An Illithid, a tentacled humanoid with psionic power. They feed by extracting and consuming the brains of sentient creatures. They reproduce through ceremorphosis, implanting tadpoles that transform victims into new Mind Flayers.',
  },
  {
    id: 4,
    type: 'monster',
    question: 'What ancient chromatic dragon is considered the mother of all evil dragons?',
    answer:
      'Tiamat, the five-headed Dragon Queen. Each head represents a chromatic color: red, blue, green, black, and white. She rules Avernus, the first layer of the Nine Hells.',
  },
  {
    id: 5,
    type: 'monster',
    question: 'What is the Tarrasque said to be capable of?',
    answer:
      'Destroying entire civilizations on its own. It regenerates rapidly, reflects spells back at casters, and is immune to fire, poison, and most conditions. It is considered one of the most powerful monsters in existence.',
  },
  {
    id: 6,
    type: 'spell',
    question: 'What does the 9th-level spell Wish allow a caster to do?',
    answer:
      'Duplicate any spell of 8th level or lower, or reshape reality itself in one sentence. Misuse risks the caster losing the ability to cast Wish permanently, and the strain can reduce their Strength to 3 for days afterward.',
  },
  {
    id: 7,
    type: 'spell',
    question: 'What does Simulacrum create and what are its key limitations?',
    answer:
      "An illusory duplicate of a creature sculpted from snow or ice. The copy has half the original's hit points, cannot regain them, cannot cast Simulacrum itself, and is immediately destroyed if the original casts the spell again.",
  },
  {
    id: 8,
    type: 'spell',
    question: 'What is the effect of the Feeblemind spell?',
    answer:
      "It devastates a creature's Intelligence and Charisma scores, dropping both to 1. The target cannot cast spells, activate magic items, or communicate meaningfully. The effect is permanent unless removed by Greater Restoration.",
  },
  {
    id: 9,
    type: 'spell',
    question: 'What does the Gate spell do and what is its most powerful use?',
    answer:
      "It opens a portal to another plane and can summon a specific creature from that plane. Unlike Planar Ally, Gate compels the creature to appear with no negotiation required, though it is not automatically under the caster's control.",
  },
  {
    id: 10,
    type: 'deity',
    question: 'Who is Kelemvor and what role does he serve among the gods?',
    answer:
      'The Lord of the Dead, god of death and the passage of souls in the Forgotten Realms. He judges souls fairly and despises undeath as an unnatural perversion. He replaced both Myrkul and Cyric in that office after the Time of Troubles.',
  },
  {
    id: 11,
    type: 'deity',
    question: 'Who is Lolth and what does she demand of her followers?',
    answer:
      'The Spider Queen, goddess of the drow. She demands absolute cruelty, betrayal, and obedience. Drow society is built around her worship, with priestesses holding supreme power in matriarchal city-states deep in the Underdark.',
  },
  {
    id: 12,
    type: 'deity',
    question: 'Who is Vecna and why do wizards fear his name?',
    answer:
      'The Undying King, a legendary lich who ascended to godhood. He is the god of secrets and forbidden knowledge. His hand and eye are among the most dangerous artifacts in existence, granting immense power at terrible personal cost.',
  },
  {
    id: 13,
    type: 'deity',
    question: 'What god do most Paladins of Devotion serve in the Forgotten Realms?',
    answer:
      'Commonly Tyr, god of justice, or Torm, god of duty and loyalty. Both are lawful good members of the Triad alongside Ilmater. Bahamut, the Platinum Dragon, is also a common patron for paladin orders.',
  },
  {
    id: 14,
    type: 'plane',
    question: 'What is the Astral Plane and why is it unusual to travel through?',
    answer:
      'A silvery void connecting the Material Plane to the Outer Planes. Time does not pass there: creatures do not age, hunger, or thirst. Silver cords connecting travelers to their bodies can be severed by psychic wind or githyanki blades.',
  },
  {
    id: 15,
    type: 'plane',
    question: 'What are the Nine Hells and who rules the deepest layer?',
    answer:
      'Baator, the plane of lawful evil, divided into nine increasingly terrible layers. Asmodeus rules the deepest layer, Nessus, as the Lord of the Nine. Each other layer is ruled by an archdevil who answers ultimately to him.',
  },
  {
    id: 16,
    type: 'plane',
    question: 'What is the Feywild and what dangers does it pose to mortal travelers?',
    answer:
      'An echo of the Material Plane saturated with wild magic and raw emotion. Time passes unpredictably: a traveler may spend what feels like a night and return to find decades have passed. The fey delight in bargains mortals regret.',
  },
  {
    id: 17,
    type: 'plane',
    question: 'What is the Shadowfell and who claims dominion over it?',
    answer:
      'The dark reflection of the Material Plane, a realm of decay and muted light. Shar, goddess of darkness and loss, holds great influence there. The Raven Queen also rules from the Fortress of Memories, collecting the souls of the dead.',
  },
  {
    id: 18,
    type: 'item',
    question: 'What does the Deck of Many Things do when a card is drawn?',
    answer:
      'Each illustrated card produces a powerful magical effect instantly. Some grant wishes, levels, or loyal knights. Others summon an avatar of Death, trap the soul in an object, or strip the drawer of every item and coin they own.',
  },
  {
    id: 19,
    type: 'item',
    question: 'What is required to attune to the Hand of Vecna?',
    answer:
      "The bearer must sever their own hand at the wrist and press the mummified hand of Vecna against the stump. It grafts on and grants immense power, but binds the wielder to Vecna's will and corrupts their alignment over time.",
  },
  {
    id: 20,
    type: 'item',
    question: 'What is the sword Blackrazor and what does it hunger for?',
    answer:
      'A powerful black blade that devours the souls of those it slays, growing stronger with each kill. It is intelligent, chaotic neutral, and cares nothing for the alignment of its wielder. It was found in the dungeon White Plume Mountain.',
  },
]

export default cards
