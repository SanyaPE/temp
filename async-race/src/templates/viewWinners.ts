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
            <div class="pagination" id="pagination-garage">
                <button class="btn pagination__item" data-btn="first">first page</button>
                <button class="btn pagination__item" data-btn="prev">prev</button>
                <button class="btn pagination__item" data-btn="next">next</button>
                <button class="btn pagination__item" data-btn="last">last page</button>           
            </div>
            <div id="winners">
            </div>
        </div>
    </section>`;
