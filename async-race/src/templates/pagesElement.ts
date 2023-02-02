const WINNERS = `<section class="winners hidden" data-view="winners">
<div class="container">
    <h2>Winners ()</h2>
</div>
</section>`;

const GARAGE = `
    <section class="garage" data-view="garage">
        <div class="container">
            <h2 class="garage__title">Garage ()</h2>
            <div class="option">
                <h3>Create car</h3>
                <div class="option__create">
                    <input type="text" class="create__name" placeholder="Enter name" />
                    <input type="color" class="create__color" />
                    <button class="btn-create btn" data-btn="create" disabled>Create</button>
                </div>
                <h3>Update car</h3>
                <div class="option__update">
                    <input type="text" placeholder="Enter new name" class="update-text" />
                    <input type="color" class="update-color" />
                    <button class="btn-update btn" data-btn="update" disabled>Update</button>
                </div>
            </div>
            <div class="control-panel">
                <button class="btn-race btn" data-btn="race">Race</button>
                <button class="btn-reset btn" data-btn="reset">Reset</button>
                <button class="btn-generate btn" data-btn="generate" >Generate cars</button>
            </div>
            <div class="total">
                <span class="total__title">Total cars:</span>
                <span class="total__qty">0</span>
            </div>
            <div class="page">
                <span class="page__title">Page:</span>
                <span class="page__count">0</span>
            </div>
            <div class="pagination__wrapper">
            </div>
            <div class="race"></div>
        </div>
    </section>`;
export { WINNERS, GARAGE };
