export const WINNERS = `
    <section class="winners hidden" data-view="winners">
        <div class="container">
            <h2 class="title">Winners</h2>
            <div class="total">
                <span class="total__title">Total winners:</span>
                <span class="total__qty" id="total-winners"></span>
            </div>
            <div class="page">
                <span class="page__title">Page:</span>
                <span class="page__count" id="page-winners">1</span>
            </div>
            <div class="pagination" id="pagination-winners">
                <button class="btn pagination__item" data-btn="first">first page</button>
                <button class="btn pagination__item" data-btn="prev">prev</button>
                <button class="btn pagination__item" data-btn="next">next</button>
                <button class="btn pagination__item" data-btn="last">last page</button>           
            </div>
            <table>
                <thead id="sort">
                    <th>#</th>
                    <th>Color</th>
                    <th>Name</th>
                    <th class="btn pointer active" id="sort-wins" data-sort="wins">Wins</th>
                    <th class="btn pointer active" id="sort-time" data-sort="time">Best Time(sec)</th>
                </thead>
                <tbody id="winners"></tbody>
            </table>
        </div>
    </section>`;
