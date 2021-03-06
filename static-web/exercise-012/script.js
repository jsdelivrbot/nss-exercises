const CardMaker = {
  makeCard: function() {
    const container = document.getElementById("container");
    const cardElm = document.createElement("div");

    cardElm.className = "card";
    cardElm.id = this.assignID();
    container.appendChild(cardElm);

    this.makeFrontMessage(cardElm);
    this.makeBodyMessage(cardElm);
    this.makeFooter(cardElm);
    this.addListener();
  },
  makeFrontMessage: function(cardElm) {
    const titleWrapper = document.createElement("div");
    const titleElm = document.createElement("h2");
    const titleNode = document.createTextNode(this.titleString);

    titleWrapper.className = "titleWrapper"
    titleElm.className = "titleElm";


    cardElm.appendChild(titleWrapper);
    titleWrapper.appendChild(titleElm);
    titleElm.appendChild(titleNode);
  },
  makeBodyMessage: function(cardElm) {
    const bodyWrapper = document.createElement("div");
    const bodyCopyElm = document.createElement("p");
    const bodyCopyNode = document.createTextNode(this.bodyCopy);

    bodyWrapper.className = "bodyWrapper";
    bodyCopyElm.className = "bodyCopy";

    cardElm.appendChild(bodyWrapper);
    bodyWrapper.appendChild(bodyCopyElm);
    bodyCopyElm.appendChild(bodyCopyNode);
  },
  makeFooter: function(cardElm) {
    const footerWrapper = document.createElement("div");
    const footerTextElm = document.createElement("p");
    const footerTextNode = document.createTextNode(`DLK Card Co. - Nashville - 2017`);

    footerWrapper.className = "footerWrapper";
    footerTextElm.className = "footerText";

    cardElm.appendChild(footerWrapper);
    footerWrapper.appendChild(footerTextElm);
    footerTextElm.appendChild(footerTextNode);
  },
  assignID: function() {
    let id = "Z";
    for (var i = 0; i < 5; i++) {
      num = Math.round(Math.random()*9);
      id += num.toString();
    }
    this.id = id;
    return id;
  },
  addListener: function() {
    let thisCard = document.getElementById(this.id);
    thisCard.addEventListener("click", () => {
      let title = thisCard.firstChild;
      let content = title.nextSibling

      if (title.style.display === "none") {
        title.style.display = "block";
        content.style.display = "none";
      } else {
        title.style.display = "none";
        content.style.display = "block";
      }
    });
  }
};

//Refactor this to link this object to cardMaker
const BirthdayCard = Object.create(CardMaker);
BirthdayCard.titleString = "Happy Birthday!"
BirthdayCard.bodyCopy = `It's your birthday, you crazy fool. I hope you celebrate
                        it in style & with wild abandon. May your next year be
                        crazier than the last.`;
BirthdayCard.makeCard();

const CondolencesCard = Object.create(CardMaker);
CondolencesCard.titleString = "My Condolences";
CondolencesCard.bodyCopy = `Please accept my deepest condolences on the passing
                           of your loved one. I grieve with you over your loss.
                           They will live on in my memory forever.`;
CondolencesCard.makeCard();

const ValentinesCard = Object.create(CardMaker);
ValentinesCard.titleString = "My Love Forever";
ValentinesCard.bodyCopy = `It's Valentine's Day, my love. My love for you will go
                          on forever, I am sure. Let us celebrate our romance today.
                          Will you be mine?`;
ValentinesCard.makeCard();
