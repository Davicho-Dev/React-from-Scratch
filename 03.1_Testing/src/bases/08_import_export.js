import { heroesData } from '../data/heroesData'

export const getHeroById = ( id ) => heroesData.find( ( hero ) => hero.id === id )

export const getHeroesByOwner = ( owner ) => heroesData.filter( ( hero ) => hero.owner === owner )

