// ===== PROTOTIPO IKASLEA =====
function Ikaslea(izena, adina, espezialitatea, ikaskidea) {
  this.izena = izena || "";
  this.adina = adina || 0;
  this.espezialitatea = espezialitatea || 1; // 1: Sistemak
  this.ikaskidea = ikaskidea || null; // otro objeto Ikaslea
}

// ---------- GET metodokoak ----------

// get izena
Ikaslea.prototype.getIzena = function() {
  return this.izena;
};

// get adina
Ikaslea.prototype.getAdina = function() {
  return this.adina;
};

// get espezialitatea -> devuelve el nombre
Ikaslea.prototype.getEspezialitatea = function() {
  switch (this.espezialitatea) {
    case 1:
      return "Sistemak";
    case 2:
      return "Web";
    case 3:
      return "Anitzeko plataforma";
    default:
      return "Ez dauka";
  }
};

// get ikaskideIzena -> usa getIzena del compañero
Ikaslea.prototype.getIkaskideIzena = function() {
  if (this.ikaskidea instanceof Ikaslea) {
    return this.ikaskidea.getIzena();
  }
  return "-";
};

// get ikaskidea -> devuelve el objeto
Ikaslea.prototype.getIkaskidea = function() {
  return this.ikaskidea;
};

// ---------- SET metodokoak ----------

// set izena
Ikaslea.prototype.setIzena = function(izenaBerria) {
  this.izena = izenaBerria;
};

// set adina
Ikaslea.prototype.setAdina = function(adinaBerria) {
  this.adina = adinaBerria;
};

// set espezialitatea (zenbaki bat jasotzen du)
Ikaslea.prototype.setEspezialitatea = function(zenbakia) {
  const n = Number(zenbakia);
  if ([1, 2, 3].includes(n)) {
    this.espezialitatea = n;
  } else {
    this.espezialitatea = 1;
  }
};

// set espezialitateIzena (string bat jasotzen du)
Ikaslea.prototype.setEspezialitateIzena = function(izena) {
  const s = String(izena).toLowerCase();
  if (s == "sistemak") {
    this.espezialitatea = 1;
  } else if (s == "web") {
    this.espezialitatea = 2;
  } else if (s == "anitzeko plataforma") {
    this.espezialitatea = 3;
  } else {
    console.log("Ez da aldatu, sartu den espezialitatea ez da aukera bat: Aukerak: sistemak, web, anitzeko plataforma");
  }
};

// set ikaskide (Ikasle motako objektua jasotzen du)
Ikaslea.prototype.setIkaskide = function(ikaslea) {
  if (ikaslea instanceof Ikaslea) {
    this.ikaskidea = ikaslea;
  } else {
    this.ikaskidea = null;
  }
};

// ---------- erakutsi ----------
// Muestra toda la información del alumno
Ikaslea.prototype.erakutsi = function() {
  return (
    "Izena: " + this.getIzena() +
    "\nAdina: " + this.getAdina() +
    "\nEspezialitatea: " + this.getEspezialitatea() +
    "\nIkaskidea: " + this.getIkaskideIzena()
  );
};