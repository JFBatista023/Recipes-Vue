<template>
    <footer class="baseboard paragraph">
        Developed by João Filipe | 2024 - Fictional non-commercial project.
    </footer>
  </template>
  
  <style scoped>
  .baseboard {
    background: var(--dark-green, #263A29);
    padding: 1.5rem 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media only screen and (max-width: 1300px) {
    .baseboard {
      padding: 1.5rem 3.75rem;
    }
  }
  
  @media only screen and (max-width: 767px) {
    .baseboard {
      padding: 1.5rem;
    }
  }
  </style>
  