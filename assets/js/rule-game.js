(function () {
  var starters = [[3, 5, 7], [2, 4, 6]];
  var start = starters[Math.floor(Math.random() * starters.length)];
  var historyEl = document.getElementById('rule-game-history');
  var form = document.getElementById('rule-game-form');
  var done = document.getElementById('rule-game-done');

  if (!historyEl || !form) {
    return;
  }

  function followsRule(a, b, c) {
    return a < b && b < c;
  }

  function addExample(a, b, c, yes) {
    var item = document.createElement('li');
    var triple = document.createElement('code');
    triple.textContent = '(' + a + ', ' + b + ', ' + c + ')';
    var mark = document.createElement('span');
    mark.className = 'label ' + (yes ? 'label-green' : 'label-red');
    mark.textContent = yes ? 'Yes' : 'No';
    item.appendChild(triple);
    item.appendChild(mark);
    historyEl.appendChild(item);
  }

  addExample(start[0], start[1], start[2], true);

  document.getElementById('rule-game-try').addEventListener('click', function () {
    form.hidden = false;
    done.hidden = true;
    document.getElementById('rule-game-a').focus();
  });

  document.getElementById('rule-game-confident').addEventListener('click', function () {
    form.hidden = true;
    done.hidden = false;
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var a = Number(document.getElementById('rule-game-a').value);
    var b = Number(document.getElementById('rule-game-b').value);
    var c = Number(document.getElementById('rule-game-c').value);
    if (![a, b, c].every(Number.isInteger)) {
      return;
    }
    addExample(a, b, c, followsRule(a, b, c));
    form.reset();
    form.hidden = true;
  });
})();
