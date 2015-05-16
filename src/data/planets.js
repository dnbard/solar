module.exports = {
    mercury: {
        size: 57,
        color: '#E0B15F',
        particles: [{
            color: '#BD944D',
            count: 16,
            size: 0.22,
            speed: 0.05,
            layer: 2
        }]
    }, venus: {
        size: 141,
        color: '#97623B',
        particles: [{
            color: '#E1BF85',
            count: 64,
            size: 0.1,
            speed: 0.3,
            layer: 3
        },{
            color: '#D4A364',
            count: 32,
            size: 0.22,
            speed: 0.05,
            layer: 2
        }]
    }, earth: {
        size: 150,
        color: '#4082D0',
        particles: [{
            color: '#8BA448',
            count: 24,
            size: 0.16,
            speed: 0.03,
            layer: 2
        },{
            color: 'white',
            count: 64,
            size: 0.09,
            speed: 0.3,
            layer: 3
        },{
            color: 'black',
            count: 32,
            size: 0.01,
            speed: 0.7,
            layer: 4
        }]
    }, mars: {
        size: 79,
        color: '#F68659',
        particles: [{
            color: 'rgba(70, 51, 67, 0.51)',
            count: 4,
            size: 0.09,
            speed: 0.03,
            layer: 4
        },{
            color: '#f77e52',
            count: 8,
            size: 0.16,
            speed: 0.03,
            layer: 3
        },{
            color: '#FDA969',
            count: 32,
            size: 0.16,
            speed: 0.03,
            layer: 2
        }]
    }, jupiter: {
        size: 350,
        color: '#85796E',
        particles:[{
            color: '#A3AFBD',
            count: 32,
            size: 0.04,
            speed: 0.2,
            layer: 3
        },{
            color: '#85796E',
            count: 8,
            size: 0.06,
            speed: 0.2,
            layer: 2
        }],
        lines: [{
            top: 80,
            height: 180,
            color: '#A3AFBD'
        },{
            top: 95,
            height: 15,
            color: '#8D8077'
        },{
            top: 125,
            height: 45,
            color: '#917761'
        }, {
            top: 200,
            height: 45,
            color: '#B7A190'
        }, {
            top: 280,
            height: 15,
            color: '#6E6864'
        }, {
            top: 315,
            height: 35,
            color: '#574D44'
        }]
    }, saturn: {
        size: 300,
        color: '#DCBB76',
        lines:[{
            top: 0,
            height: 20,
            color: 'rgba(71, 81, 88, 0.5)'
        },{
            top: 20,
            height: 55,
            color: 'rgba(147, 145, 122, 0.5)'
        },{
            top: 75,
            height: 60,
            color: 'rgba(170, 159, 116, 0.5)'
        },{
            top: 240,
            height: 40,
            color: 'rgba(181, 158, 117, 0.5)'
        },{
            top: 280,
            height: 20,
            color: 'rgba(88, 86, 61, 0.5)'
        }]
    }, uranus: {
        size: 180,
        color: '#BDE3E6',
        particles: [{
            color: '#6E6E6E',
            count: 27,
            size: 0.012,
            speed: 0.4,
            layer: 2
        }]
    }
};
