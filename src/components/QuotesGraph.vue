<script setup>
import cytoscape from 'cytoscape';
import cola from 'cytoscape-cola';
import { ref, onMounted } from 'vue';
import quotesData from '@/assets/data/quotes.json';

cytoscape.use(cola);

const container = ref(null);

const elements = [
    { data: { id: 'center', label: '' }, locked: true, position: { x: 500, y: 400 } },
    ...quotesData.map((quote, index) => ({
        data: { id: `q${index}`, label: `${quote[0]}\n\n${quote[1]}` },
    })),
    ...quotesData.map((quote, index) => ({
        data: { id: `e${index}`, source: 'center', target: `q${index}` }
    })),
]

onMounted(() => {
    const cy = cytoscape({
        container: container.value,
        elements,
        style: [
            {
                selector: 'node',
                style: {
                    width: 120,
                    height: 120,
                    label: 'data(label)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'background-color': '#a9d0fc',
                    color: '#000',
                    'font-size': '10',
                    'text-wrap': 'wrap',
                }
            },
            {
                selector: 'edge',
                style: {
                    width: 1.5,
                    'line-color': '#888'
                }
            }
        ],
        layout: {
            name: 'cola',
            infinite: true,
            nodeSpacing: 15,
            edgeLengthVal: 25,
            animate: true,
            fit: false,
            boundingBox: {
                x1: 0,
                y1: 0,
                w: 800,
                h: 800
            },
            randomize: true,
        },
        userZoomingEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
    });
});
</script>

<template>
    <div ref="container" class="quotes" style="width: 1000px; height: 800px; margin: auto;"></div>
</template>
