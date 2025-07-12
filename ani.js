// gsap.registerPlugin(TextPlugin);

// const head = document.getElementById("h-tg1");

// gsap.to(head, {
//     duration: 5, 
//     text: "Inderdeep Infra India Limited.",
// });

const TESTER = document.getElementById('tester');
          Plotly.plot(TESTER, [{
               x: [1, 2, 3, 4, 5],
               y: [1, 2, 4, 8, 16]
          }], {
               margin: { t: 0 }
          }, { showSendToCloud: true });

          console.log(Plotly.BUILD);