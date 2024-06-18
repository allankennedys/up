 document.addEventListener('DOMContentLoaded', function () {
        var navbar = document.querySelector('nav.navbar');
        var textBarSection = document.querySelector('.text_bar');

        window.addEventListener('scroll', function () {
            var textBarSectionTop = textBarSection.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY >= textBarSectionTop) {
                navbar.classList.add('fixed-top');
            } else {
                navbar.classList.remove('fixed-top');
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const buyButtons = document.querySelectorAll('#buybutton');// seleciona os botões de compra
        
        // função p/ alternar a imagem
        function toggleImage(event) {
            event.preventDefault();
            const button = event.currentTarget;
            const img = button.querySelector('img');
            
            //armazena cada imagem a uma constante para que possamos manipular as interações
            const originalImageSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUhJREFUSEu9lS1PxFAQRc8lwWBJCBZNQpCrcAgMCrEGTQCBI/wFPJA1GAxBoDAIDIogCRgsigSDQZFw6dt0N91uv0t55omZN2dm7kwrOj7qOD7/B7DtuJov4FzSwV9UN64gARjFXZd01xYy1SLbh8AxcCNpswvAPPAOzABLkt7aQDJFtn0BbLcI/CRpNbzPA/SAhxaAZ0kruYBgsP0CLGdBJA0TyxiMkfuRpKBj/h7Y3gEGDQA/0btFSR9lgDkgOIV7eEaZp6GpSm4lbYzfFPXZ9kkE2a8J6Eu6qgoIGgQtJk6BBp/AgqTvSoBYyHtgLUkoAAwk7U74lo2i7T5wWeYX23tR/x/rAmaB17DVJZBrSVtT7ayYWWO3Sv8D26fAXiTgWTTf46mKNcq1Fe5BMuXknKd3ochWB9BtBY0FKPoWtQlaa0zbgn4BJ3V9GSK63UUAAAAASUVORK5CYII=';
            const newImageSrc = 'img/approved.png';
    
            // muda a imagem de acordo com a interação do usuário
            if (img.src === originalImageSrc) {
                img.src = newImageSrc;
            } else {
                img.src = originalImageSrc;
            }
        }
        
        // Cria um evento a cada click no botão de compra
        buyButtons.forEach(button => {
            button.addEventListener('click', toggleImage);
        });
        
        
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        // alterna a imagem do botão de like
        function toggleLikeImage(event) {
          event.preventDefault();
          const button = event.currentTarget;
          const img = button.querySelector('img');
          
          // armazena cada imagem a uma constante para que possamos manipular as interações, dessa vez para o botão de like
          const originalHeart = 'img/heart.png';
          const newHeart = 'img/heartfilled.png';
      
          // alterna a imagem de acordo com a interação
          if (img.src.includes(originalHeart)) {
            img.src = newHeart;
          } else {
            img.src = originalHeart;
          }
        }
      
        
        const likeButtons = document.querySelectorAll('#like');
        likeButtons.forEach(button => {
          button.addEventListener('click', toggleLikeImage);
        });
      });
      const ratings = document.getElementById('rating1'); const rating1 = new CDB.Rating(ratings);
      rating1.getRating;

      function submitContact() {
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        const confirmationMessage = document.getElementById('confirmationMessage');
        const errorMessage = document.getElementById('errorMessage');

        confirmationMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        if (nome.value===''||mensagem.value==='') {
          errorMessage.style.display = 'block';

        }
        else{
          nome.value = '';
          telefone.value = '';
          email.value = '';
          mensagem.value = '';
          confirmationMessage.style.display = 'block';

        }
    }
    