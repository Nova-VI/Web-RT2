const colorInput = document.getElementById("color-input");
const fontSize = document.getElementById("number-input");
const fontType = document.getElementById("font-select");
const title = document.getElementById("title");
const fontNames = [
  "Arial",
  "Helvetica",
  "Tahoma",
  "Verdana",
  "Trebuchet MS",
  "Georgia",
  "Palatino",
  "Times New Roman",
  "Courier New",
  "Lucida Console",
  "Impact",
  "Arial Black",
  "Comic Sans MS",
  "Century Gothic",
  "Book Antiqua",
  "Garamond",
  "Copperplate",
  "Futura",
  "Gill Sans",
  "Optima",
  "Baskerville",
  "Franklin Gothic",
  "Rockwell",
  "Bodoni",
  "Didot",
  "Helvetica Neue",
  "Avenir",
  "Myriad",
  "Consolas",
  "Monaco",
  "Andale Mono",
  "Courier",
  "Lucida Sans Typewriter",
  "Lucida Sans",
  "Geneva",
  "Avant Garde",
  "Verdana Ref",
  "Gill Sans MT",
  "Calibri",
  "Candara",
  "Arial Narrow",
  "Ebrima",
  "Segoe UI",
  "Century",
  "Perpetua",
  "Cambria",
  "Constantia",
  "Corbel",
  "Mistral",
  "Bradley Hand",
  "Brush Script MT",
  "Vivaldi",
  "Papyrus",
  "Kristen ITC",
  "Curlz MT",
  "Snap ITC",
  "Chiller",
  "Old English Text MT",
  "Bauhaus 93",
  "Berlin Sans FB",
  "Cooper Black",
  "Elephant",
  "Freestyle Script",
  "Harlow Solid Italic",
  "Jokerman",
  "Magneto",
  "Ravie",
  "Wide Latin",
  "Goudy Stout",
  "Bodoni MT",
  "Bodoni MT Black",
  "Rockwell Extra Bold",
  "Bodoni MT Condensed",
  "Harrington",
  "High Tower Text",
  "Imprint MT Shadow",
  "Javanese Text",
  "Perpetua Titling MT",
  "Rage Italic",
  "Stencil",
  "Tw Cen MT",
  "Tw Cen MT Condensed",
  "Tw Cen MT Condensed Extra Bold",
  "Bernard MT Condensed",
  "Gill Sans Ultra Bold Condensed",
  "Niagara Solid",
  "Ribbon",
  "Gill Sans MT Ext Condensed Bold",
  "Rockwell Condensed",
  "Arial Rounded MT Bold",
  "Bell MT",
  "Brush Script Std",
  "Felix Titling",
  "Forte",
  "Informal Roman",
  "Poor Richard",
  "Magneto Bold",
  "Perpetua Titling MT Light",
  "Rockwell Bold",
  "Segoe Script",
  "Gill Sans MT Condensed",
  "Gill Sans MT Ext Condensed",
  "Myriad Pro",
  "Myriad Pro Condensed",
  "Myriad Pro Light",
  "Myriad Pro Semibold",
  "Myriad Pro Bold",
  "Myriad Pro Black",
  "Myriad Arabic",
  "Myriad Hebrew",
  "Myriad Thai",
  "MS Mincho",
  "MS PMincho",
  "MS Gothic",
  "MS PGothic",
  "MS UI Gothic",
  "MS PGothic",
  "MS Mincho",
  "MS PMincho",
  "MS Gothic",
  "MS PGothic",
  "MS UI Gothic",
  "Batang",
  "BatangChe",
  "Gulim",
  "GulimChe",
  "Dotum",
  "DotumChe",
  "Malgun Gothic",
  "Malgun Gothic Semilight",
  "Malgun Gothic Light",
  "Malgun Gothic Bold",
  "Gungsuh",
  "GungsuhChe",
  "Cordia New",
  "DokChampa",
  "Iskoola Pota",
  "Khmer UI",
  "KodchiangUPC",
  "Lao UI",
  "Mongolian Baiti",
  "MS Reference Sans Serif",
  "MS Reference Specialty",
  "Mv Boli",
  "Narkisim",
  "Nirmala UI",
  "Plantagenet Cherokee",
  "Raavi",
  "Segoe Print",
  "Segoe UI Symbol",
  "Shonar Bangla",
  "Shruti",
  "SimHei",
  "Simplified Arabic",
  "Simplified Arabic Fixed",
  "SimSun",
  "SimSun-ExtB",
  "Sylfaen",
  "Traditional Arabic",
  "Vani",
  "Vijaya",
  "Wingdings",
  "Wingdings 2",
  "Wingdings 3",
  "Yet R",
  "Angsana New",
  "AngsanaUPC",
  "Browallia New",
  "BrowalliaUPC",
  "Cordia New",
  "CordiaUPC",
  "Estrangelo Edessa",
  "FangSong",
  "FrankRuehl",
  "FreesiaUPC",
  "Gautami",
  "IrisUPC",
  "KaiTi",
  "Kalinga",
  "Kartika",
  "Leelawadee",
  "LilyUPC",
  "Microsoft Himalaya",
  "Microsoft JhengHei",
  "Microsoft New Tai Lue",
  "Microsoft PhagsPa",
  "Microsoft Tai Le",
  "Microsoft Yi Baiti",
  "Miriam",
  "Miriam Fixed",
  "Mongolian Baiti",
  "MoolBoran",
  "MS Gothic",
  "MS Mincho",
  "MS PGothic",
  "MS PMincho",
  "MS Reference Sans Serif",
  "MS Reference Specialty",
  "MT Extra",
  "MV Boli",
  "Narkisim",
  "PMingLiU",
  "Raavi",
  "Rod",
  "Sakkal Majalla",
  "Sylfaen",
  "Tunga",
  "Utsaah",
  "Vrinda",
  "DilleniaUPC",
  "DokChampa",
  "Iskoola Pota",
  "Lao UI",
  "Malgun Gothic",
  "Meiryo",
  "Meiryo UI",
  "Microsoft Himalaya",
  "Microsoft JhengHei",
  "Microsoft New Tai Lue",
  "Microsoft PhagsPa",
  "Microsoft Tai Le",
  "Microsoft YaHei",
  "Microsoft Yi Baiti",
  "MingLiU",
  "PMingLiU",
  "Segoe UI",
  "Segoe UI Light",
  "Segoe UI Semibold",
  "Segoe UI Symbol",
  "SimSun",
  "SimSun-ExtB",
  "NSimSun",
  "FangSong",
  "KaiTi",
  "MingLiU-ExtB",
  "Arial Unicode MS",
  "Gautami",
  "Kalinga",
  "Kartika",
  "Khmer UI",
  "Latha",
  "Malgun Gothic",
  "Microsoft YaHei",
  "Mongolian Baiti",
  "MoolBoran",
  "Nirmala UI",
  "Plantagenet Cherokee",
  "Raavi",
  "Sakkal Majalla",
  "Simplified Arabic",
  "Traditional Arabic",
  "Trebuchet MS",
  "Verdana",
  "Microsoft Yi Baiti",
  "Ebrima",
  "Gadugi",
  "Javanese Text",
  "Leelawadee UI",
  "Microsoft New Tai Lue",
  "Myanmar Text",
  "Nirmala UI",
  "Nyala",
  "Segoe Print",
  "Segoe Script",
  "Segoe UI Historic",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Shonar Bangla",
  "Vrinda",
  "Arabic Typesetting",
  "DilleniaUPC",
  "DokChampa",
  "Estrangelo Edessa",
];

fontNames.forEach(function (fontName) {
  var option = document.createElement("option");
  option.value = fontName;
  option.textContent = fontName;
  fontType.appendChild(option);
});

colorInput.addEventListener("input", () => {
  title.style.color = colorInput.value;
});

fontSize.addEventListener("input", () => {
  if (fontSize.value > 300 || fontSize.value < 10) {
    fontSize.style.border = "2px solid red";
  }
  else {
    fontSize.style.cssText = "  border: none;border-bottom: 2px solid white; "
    title.style.fontSize = fontSize.value + "px";
  }

});

fontType.addEventListener("change", () => {
  console.log("fwfewfewfew");
  selectedFont = fontType.options[fontType.selectedIndex].value;
  title.style.fontFamily = selectedFont;
});
