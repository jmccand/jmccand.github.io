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
                    width: 'label',                // let nodes size dynamically with text
                    height: 'label',
                    padding: '15px',
                    shape: 'round-rectangle',      // smoother shape for text boxes
                    label: 'data(label)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'background-color': '#f0f9ff',
                    'border-width': 2,
                    'border-color': '#60a5fa',
                    'border-opacity': 0.8,
                    color: '#1f2937',
                    'font-size': 12,
                    'font-weight': '500',
                    'text-wrap': 'wrap',
                    'text-max-width': 100,         // constrain wrapping
                    'text-outline-width': 1,
                    'text-outline-color': '#f0f9ff'
                }
            },
            {
                selector: 'node#center',
                style: {
                    width: 80,
                    height: 80,
                    shape: 'ellipse',
                    'background-color': '#2563eb',
                    'border-color': '#1e3a8a',
                    'border-width': 3,
                    'font-size': 14,
                    'font-weight': '600',
                    color: '#fff',
                    label: ''
                }
            },
            {
                selector: 'edge',
                style: {
                    width: 2,
                    'line-color': '#93c5fd',
                    'curve-style': 'bezier',
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': '#93c5fd',
                    'arrow-scale': 1,
                    opacity: 0.8
                }
            },
            {
                selector: 'node:selected',
                style: {
                    'border-color': '#f59e0b',
                    'border-width': 4,
                    'background-color': '#fffbeb'
                }
            },
            {
                selector: 'edge:selected',
                style: {
                    'line-color': '#f59e0b',
                    'target-arrow-color': '#f59e0b'
                }
            }
        ],
        layout: {
            name: 'cola',
            infinite: true,
            nodeSpacing: 40,       // more breathing room
            edgeLengthVal: 60,     // longer edges
            animate: true,
            fit: true,
            randomize: true
        },
        userZoomingEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
    });
});
</script>

<template>
    <div ref="container" class="quotes" style="width: 1000px; height: 800px; margin: auto; padding: 0;"></div>
</template>
