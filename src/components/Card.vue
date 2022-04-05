<template>
  <div>
    <div class="card">
      <div id="restaureImage" class="card_image">
        <slot name="imagem"></slot>
      </div>
      <div id="cardContent" class="card_content">
        <h2 class="card_title">
          <slot name="titulo"></slot>
        </h2>
        <p class="card_text">
          <slot name="texto"></slot>
        </p>
        <slot name="botao"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    imagem: String
  }
};
</script>
<style>

#restaureImage{
  width: 250px;
  height: 130px;
}

#cardContent{
  height: 150px;
}

.principal h1 {
  margin: 0 6% 20px;
  text-align: center;
}
.principal h1,
.principal h2 {
  margin-bottom: 20px;
}
.section-item {
  margin-bottom: 30px;
}
.content {
  margin: 6%;
  text-align: left;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.section-item p {
  margin-bottom: 5px;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
}
.card_image img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.image {
  height: 50vh;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards_item {
  display: flex;
  padding: 1rem;
}
p {
  color: #828282;
}
@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards_item {
    width: 25%;
  }
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.card_content {
  padding: 1rem;
  background: #ffffff;
}
.card_title {
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0 0 10px 0;
}
.card_text {
  color: #828282;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-weight: 400;
}
.div-section {
  margin-bottom: 60px;
}
@media (min-width: 56rem) {
  .div-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
}
</style>