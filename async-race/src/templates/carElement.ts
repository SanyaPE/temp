export const CAR_ELEM = `<div class="car">
<div class="car__ctrl">
    <button class="car__select-btn btn" data-btn="select">Select</button>
    <button class="car__remove-btn btn" data-btn="remove">Remove</button>
    <span class="car__name">Tesla</span>
</div>
<div class="car__race">
    <button class="car__start-btn btn" data-btn="start">A</button>
    <button class="car__stop-btn btn" data-btn="stop" disabled>B</button>
    <div class="car__img-wrapper" data-btn="img">
    <svg
        class="car__img"
        width="80px"
        height="60px"
        viewBox="90 10 5 160"
        data-btn="img"
    >
        <g id="color"
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
            style="outline: rgb(1, 64, 254) solid 1px"
        >
            <path
                d="M554 1369 c-22 -5 -107 -47 -188 -93 -143 -81 -149 -84 -230 -91 -45
        -3 -88 -10 -96 -15 -9 -5 -18 -50 -26 -132 -18 -168 -17 -207 5 -248 16 -31
        24 -36 72 -42 30 -4 66 -10 82 -13 21 -3 27 -1 27 13 0 76 58 153 128 171 101
        28 195 -42 217 -162 l7 -37 473 0 473 0 7 50 c17 126 131 193 239 141 52 -26
        83 -70 94 -133 l8 -43 57 1 c88 2 100 17 95 124 -4 108 -26 156 -86 189 -51
        27 -153 55 -267 71 -71 10 -96 20 -220 90 -217 121 -237 129 -343 146 -115 19
        -469 27 -528 13z m271 -68 c28 -6 30 -10 41 -81 7 -41 13 -87 13 -102 1 -27
        -1 -28 -52 -28 -30 0 -109 3 -175 7 l-122 6 0 56 c0 31 4 61 8 67 9 15 109 65
        147 75 37 9 100 9 140 0z m265 -28 c134 -37 240 -118 240 -184 0 -10 -160 -12
        -277 -2 -79 6 -82 7 -92 35 -6 16 -13 63 -17 104 l-7 76 49 -7 c27 -4 74 -13
        104 -22z"
                style="outline: rgb(254, 1, 186) solid 1px"
            ></path>
            <path
                d="M303 886 c-47 -21 -73 -70 -73 -135 0 -49 3 -57 39 -92 35 -36 43
        -39 92 -39 68 0 114 27 136 77 38 93 -18 192 -114 200 -28 2 -61 -3 -80 -11z"
                style="outline: rgb(254, 207, 1) solid 1px" data-btn="img"
            ></path>
            <path
                d="M1601 883 c-70 -35 -94 -136 -48 -204 28 -42 60 -59 115 -59 85 0
        142 56 142 139 0 108 -109 173 -209 124z"
                style="outline: rgb(1, 254, 102) solid 1px"
            ></path> data-btn="img"
        </g>
    </svg>
    </div>
    <img class="car__flag" src="./assets/icons/flag.svg" alt="Car" width="160px" height="110px"/>
</div>
</div>`;
