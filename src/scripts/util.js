
    //variables for creation of cards/deck and scoring purposes
export const suits = ['♣', '♦', '♥', '♠']
export const values = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2].reverse();
// export const letterValue = {'A': 14, 'K': 13, 'Q': 12, 'J': 11}
export const rankingHands = ['high card', 'pair', 'two pairs', 'three of a kind', 'striaght', 'flush', 'full house', 'four of a kind', 'striaght flush', 'royal flush'];
export const cardImgs = [
    [
        {
            face: 2,
            img: 'images/2-clover.png'
        },
        {
            face: 3,
            img: 'images/3-clover.png'
        },
        {
            face: 4,
            img: 'images/4-clover.png'
        },
        {
            face: 5,
            img: 'images/5-clover.png'
        },
        {
            face: 6,
            img: 'images/6-clover.png'
        },
        {
            face: 7,
            img: 'images/7-clover.png'
        },
        {
            face: 8,
            img: 'images/8-clover.png'
        },
        {
            face: 9,
            img: 'images/9-clover.png'
        },
        {
            face: 10,
            img: 'images/10-clover.png'
        },
        {
            face: 'J',
            img: 'images/J-clover.png'
        },
        {
            face: 'Q',
            img: 'images/Q-clover.png'
        },
        {
            face: 'K',
            img: 'images/K-clover.png'
        },
        {
            face: 'A',
            img: 'images/A-diamond.png'
        }
    ],
    [
        {
            face: 2,
            img: 'images/2-diamond.png'
        },
        {
            face: 3,
            img: 'images/3-diamond.png'
        },
        {
            face: 4,
            img: 'images/4-diamond.png'
        },
        {
            face: 5,
            img: 'images/5-diamond.png'
        },
        {
            face: 6,
            img: 'images/6-diamond.png'
        },
        {
            face: 7,
            img: 'images/7-diamond.png'
        },
        {
            face: 8,
            img: 'images/8-diamond.png'
        },
        {
            face: 9,
            img: 'images/9-diamond.png'
        },
        {
            face: 10,
            img: 'images/10-diamond.png'
        },
        {
            face: 'J',
            img: 'images/J-diamond.png'
        },
        {
            face: 'Q',
            img: 'images/Q-diamond.png'
        },
        {
            face: 'K',
            img: 'images/K-diamond.png'
        },
        {
            face: 'A',
            img: 'images/A-diamond.png'
        }
    ],
    [
        {
            face: 2,
            img: 'images/2-heart.png'
        },
        {
            face: 3,
            img: 'images/3-heart.png'
        },
        {
            face: 4,
            img: 'images/4-heart.png'
        },
        {
            face: 5,
            img: 'images/5-heart.png'
        },
        {
            face: 6,
            img: 'images/6-heart.png'
        },
        {
            face: 7,
            img: 'images/7-heart.png'
        },
        {
            face: 8,
            img: 'images/8-heart.png'
        },
        {
            face: 9,
            img: 'images/9-heart.png'
        },
        {
            face: 10,
            img: 'images/10-heart.png'
        },
        {
            face: 'J',
            img: 'images/J-heart.png'
        },
        {
            face: 'Q',
            img: 'images/Q-heart.png'
        },
        {
            face: 'K',
            img: 'images/K-heart.png'
        },
        {
            face: 'A',
            img: 'images/A-heart.png'
        }
    ],
    [
        {
            face: 2,
            img: 'images/2-spade.png'
        },
        {
            face: 3,
            img: 'images/3-spade.png'
        },
        {
            face: 4,
            img: 'images/4-spade.png'
        },
        {
            face: 5,
            img: 'images/5-spade.png'
        },
        {
            face: 6,
            img: 'images/6-spade.png'
        },
        {
            face: 7,
            img: 'images/7-spade.png'
        },
        {
            face: 8,
            img: 'images/8-spade.png'
        },
        {
            face: 9,
            img: 'images/9-clover.png'
        },
        {
            face: 10,
            img: 'images/10-spade.png'
        },
        {
            face: 'J',
            img: 'images/J-spade.png'
        },
        {
            face: 'Q',
            img: 'images/Q-spade.png'
        },
        {
            face: 'K',
            img: 'images/K-spade.png'
        },
        {
            face: 'A',
            img: 'images/A-spade.png'
        }
    ]
]