export const graphOptions = {
    autoResize: true,
    layout: {
        clusterThreshold: 50,
        hierarchical: {
            enabled: false,
            parentCentralization: true
        }
    },
    interaction: {
        hover: true,
        navigationButtons: true,
        keyboard: true,
        zoomView: false
    },
    nodes: {
        font: {
            color: '#FFFFFF'
        }
    },
    edges: {
        width: 4,
        hoverWidth: 5.5,
        arrows: {
            to: {
                enabled: false
            }
        },
        smooth: true,
        color: { inherit: true, opacity: 0.4 }
    },
    groups: {
        root: {
            color: '#FF80FF',
            size: 45,
            font: { size: 18 }
        },
        web: {
            color: '#00FFFF',
            size: 40,
            font: { size: 18 }
        },
        data: {
            color: '#FF4000',
            size: 40,
            font: { size: 18 }
        },
        cloud: {
            color: '#40FF80',
            size: 40,
            font: { size: 18 }
        },
        skills: {
            color: 'rgb(255, 140, 0)',
            font: { size: 16 }
        }
    }
};

const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

export const graph = {
    nodes: [
        { id: 1, label: "Technical Skills", group: 'root' },
        { id: 2, label: "Web", group: 'web' },
        { id: 3, label: "Data", group: 'data' },
        { id: 4, label: "Cloud", group: 'cloud' },
        { id: 5, label: "HTML", group: 'skills' },
        { id: 6, label: "JavaScript", group: 'skills' },
        { id: 7, label: "CSS", group: 'skills' },
        { id: 8, label: "TypeScript", group: 'skills' },
        { id: 9, label: "Bootstrap", group: 'skills' },
        { id: 10, label: "Figma", group: 'skills' },
        { id: 11, label: "Angular", group: 'skills' },
        { id: 12, label: "React", group: 'skills' },
        { id: 13, label: "Material", group: 'skills' },
        { id: 14, label: "Nodejs", group: 'skills' },
        { id: 15, label: "Nestjs", group: 'skills' },
        { id: 16, label: "SQL", group: 'skills' },
        { id: 17, label: "Python", group: 'skills' },
        { id: 18, label: "Pandas", group: 'skills' },
        { id: 19, label: "Numpy", group: 'skills' },
        { id: 20, label: "NLTK", group: 'skills' },
        { id: 21, label: "Spacy", group: 'skills' },
        { id: 22, label: "BeautifulSoup", group: 'skills' },
        { id: 23, label: "Excel", group: 'skills' },
        { id: 24, label: "AWS", group: 'skills' },
        { id: 25, label: "EC2", group: 'skills' },
        { id: 26, label: "S3", group: 'skills' },
        { id: 27, label: "RDS", group: 'skills' },
        { id: 28, label: "Route53", group: 'skills' },
        { id: 29, label: "AWS CLI", group: 'skills' },
        { id: 30, label: "SQS", group: 'skills' },
        { id: 31, label: "ACM", group: 'skills' },
        { id: 32, label: "Google APIs", group: 'skills' },
        { id: 33, label: "HTTPS/SSL", group: 'skills' },
        { id: 34, label: "Domain management", group: 'skills' },
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 4, to: 24 },
        ...range(5, 17).map(id => ({ from: 2, to: id })),            // Web Skills
        ...range(17, 24).map(id => ({ from: 3, to: id })),           // Data Skills
        ...range(25, 32).map(id => ({ from: 24, to: id })),          // AWS Skills
        ...range(32, 35).map(id => ({ from: 4, to: id })),           // Cloud Skills
    ]
};
