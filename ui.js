export function setText(element, text) {
  element.textContent = text;
}

export function renderResult(result, summaryElement, outputElement) {
  summaryElement.innerHTML = `
    <div class="metric"><small>初期値</small><strong>${result.start}</strong></div>
    <div class="metric"><small>停止時間</small><strong>${result.steps ?? "未到達"}</strong></div>
    <div class="metric"><small>最大値</small><strong>${result.maximum}</strong></div>
    <div class="metric"><small>1到達</small><strong>${result.reachesOne ? "はい" : "いいえ"}</strong></div>
  `;

  outputElement.textContent = result.sequence.join(" → ");
}

export function renderBatch(results, tbody) {
  tbody.innerHTML = "";

  for (const result of results) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.start}</td>
      <td>${result.steps ?? "未到達"}</td>
      <td>${result.maximum}</td>
      <td>${result.reachesOne ? "はい" : "いいえ"}</td>
    `;
    tbody.appendChild(row);
  }
}
