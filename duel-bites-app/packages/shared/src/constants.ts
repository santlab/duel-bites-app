export const CLASSES = {
  TORTA: 'torta',
  BOLO: 'bolo',
  CHURRASCO: 'churrasco',
};

export const INITIAL_HP = 100;

export const DAMAGE_VALUES = {
  [CLASSES.TORTA]: 15,
  [CLASSES.BOLO]: 10,
  [CLASSES.CHURRASCO]: 20,
};

export const WIN_MESSAGES = {
  [CLASSES.TORTA]: 'Torta é o vencedor!',
  [CLASSES.BOLO]: 'Bolo é o vencedor!',
  [CLASSES.CHURRASCO]: 'Churrasco é o vencedor!',
};

export const LOSE_MESSAGES = {
  [CLASSES.TORTA]: 'Torta foi derrotada!',
  [CLASSES.BOLO]: 'Bolo foi derrotado!',
  [CLASSES.CHURRASCO]: 'Churrasco foi derrotado!',
};