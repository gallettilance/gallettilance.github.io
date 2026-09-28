---
layout: page
title: Game
description: Discover the hidden rule for triples of integers.
permalink: /game/
nav_exclude: true
search_exclude: true
---

# Discover the Rule

There is a hidden rule that some triples of integers `(a, b, c)` follow and others do not.

You are given one triple that **follows the rule**. Submit more examples to test your ideas. Each triple will be marked **Yes** or **No**.

When you think you know the rule, keep it to yourself. We will discuss it in class.

<div class="rule-game" id="rule-game">
  <h2>Examples so far</h2>
  <ul class="rule-game__history" id="rule-game-history"></ul>

  <div id="rule-game-choice">
    <button type="button" class="btn" id="rule-game-try">Try another example</button>
    <button type="button" class="btn btn-outline" id="rule-game-confident">I'm confident in the rule</button>
  </div>

  <form id="rule-game-form" class="rule-game__form" hidden>
    <p>Enter a triple of integers:</p>
    <div class="rule-game__inputs">
      <label>
        <span>a</span>
        <input id="rule-game-a" name="a" type="number" step="1" required>
      </label>
      <label>
        <span>b</span>
        <input id="rule-game-b" name="b" type="number" step="1" required>
      </label>
      <label>
        <span>c</span>
        <input id="rule-game-c" name="c" type="number" step="1" required>
      </label>
      <button type="submit" class="btn">Check</button>
    </div>
  </form>

  <p class="rule-game__done" id="rule-game-done" hidden>You have a rule in mind. Hold onto it until we discuss it in class.</p>
</div>

<script src="{{ '/assets/js/rule-game.js' | relative_url }}"></script>
