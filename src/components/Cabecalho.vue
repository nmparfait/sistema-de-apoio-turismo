<template>
  <router-link to="/" class="router-link">
   <!-- <header class="showcase">
      <div class="container-fluid">
        <div class="row">
          <div><a href="#"><img src="../assets/logosistema.jpeg" alt="logo site" class="logo"></a></div>
          <div class="col-md-12 text-center">
            <h1>Sistema de Apoio ao Turismo</h1>
          </div>
          <ul class=" menu">
            <li>Home</li>
            <li>Eventos</li>
            <li>Proposta</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </header> -->

    <!--nav-->
    <nav>
      <ul>
        <li><a href="#" class="logo">S.a.Turismo<i class="fa fa-arrow-down"></i></a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sugestoes">Sugestões</a></li>
        <li><input type="text" id="pesquisar" name="pesquisar" placeholder="pesquise aqui"></li>
            
      </ul>
    </nav>
    <!--end of nav-->
  </router-link>
</template>



<script>

export default {
  name: "Cabecalho"
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Grape+Nuts&display=swap');
nav ul {
    list-style-type: none;
    border-top: 6px solid #fba800;
    background: white;
    transition: border 3s;
}

nav ul:hover {
  transition: border 3s;
}

nav ul li a {
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 20px;
    padding: 15px 25px;
    color: #070707;
}

nav ul li a:hover {
    color: #fba800;

}

.logo {
    font-family: 'Grape Nuts', cursive;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 30px;
    background: #0e0d0d;
    color: #f5f3f5;
    font-style: italic;
    border-radius: 30px;
    margin-top: 10px;
}

.logo:hover {
  background-color: #0c0c0c;
  color: #fba800;
}

#pesquisar {
  border: 3px solid #fba800;
}


/* responsive version */
@media screen and (min-width:576px) {
    nav ul {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
    }

    nav ul li {
        flex: 1 0 auto;
    }

    .logo {
        display: block;
        text-align: center;
    }

    nav .fa {
        display: none;
    }
}



</style>