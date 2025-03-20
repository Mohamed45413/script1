//button.menu-btn[onclick="toggleMenu()"]{☰}+div#menu.menu>div.close-btn[onclick="toggleMenu()"]{X}+div.menu-content>a.element*4>lorem1
let styles=`
  <style>
  .menu-btn {
      position: fixed;
      left: 20px;
      top: 20px;
      padding: 10px 15px;
      background: #333;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 18px;
      border-radius: 5px;
    }
    .menu {
      position: fixed;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      background: #222222;
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      transition: left 0.3s ease;
    }
    .menu.open {
      left: 0;
    }
    .close-btn {
      align-self: flex-end;
      font-size: 20px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 50%;
    }
    .menu-content {
      flex-grow: 1;
      max-height: 85vh;
      overflow-y: scroll;
      padding-right: 10px;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .menu-content::-webkit-scrollbar {
      display: none;
    }
    .menu-content .element {
      padding: 10px;
      border-bottom: 1px solid #444;
      cursor: pointer;
      transition: 0.3s;
      display: block;
      color: #FFFFFF;
      text-decoration: none
    }
    .menu-content .element:hover {
      background: #444;
    }
    </style>
`
document.body.innerHTML +=styles
    function toggleMenu() {
      document.getElementById("menu").classList.toggle("open");
    }