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
                    width: 'label',
                    height: 'label',
                    padding: '18px',
                    shape: 'round-rectangle',
                    label: 'data(label)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'background-color': '#ffffff',
                    'border-width': 2.5,
                    'border-color': '#cbd5e1',
                    'border-opacity': 1,
                    color: '#334155',
                    'font-size': 13,
                    'font-weight': '500',
                    'font-family': 'Inter, -apple-system, sans-serif',
                    'text-wrap': 'wrap',
                    'text-max-width': 120,
                    'text-outline-width': 0,
                    'shadow-blur': 8,
                    'shadow-color': 'rgba(0, 0, 0, 0.08)',
                    'shadow-offset-x': 0,
                    'shadow-offset-y': 2,
                    'shadow-opacity': 1
                }
            },
            {
                selector: 'node#center',
                style: {
                    width: 100,
                    height: 100,
                    shape: 'ellipse',
                    'background-color': '#2563eb',
                    'border-color': '#1e40af',
                    'border-width': 4,
                    'font-size': 16,
                    'font-weight': '700',
                    color: '#fff',
                    label: '💡',
                    'shadow-blur': 20,
                    'shadow-color': 'rgba(37, 99, 235, 0.4)',
                    'shadow-offset-x': 0,
                    'shadow-offset-y': 4,
                    'shadow-opacity': 1
                }
            },
            {
                selector: 'edge',
                style: {
                    width: 1.5,
                    'line-color': '#cbd5e1',
                    'curve-style': 'bezier',
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': '#cbd5e1',
                    'arrow-scale': 0.8,
                    opacity: 0.5
                }
            },
            {
                selector: 'node:selected',
                style: {
                    'border-color': '#f59e0b',
                    'border-width': 3.5,
                    'background-color': '#fffbeb',
                    'shadow-blur': 12,
                    'shadow-color': 'rgba(245, 158, 11, 0.3)',
                    'shadow-offset-y': 4
                }
            },
            {
                selector: 'edge:selected',
                style: {
                    'line-color': '#0891b2',
                    'target-arrow-color': '#0891b2',
                    width: 2.5,
                    opacity: 0.8
                }
            }
        ],
        layout: {
            name: 'cola',
            infinite: true,
            nodeSpacing: 60,
            edgeLengthVal: 80,
            animate: true,
            fit: true,
            randomize: true,
            padding: 40
        },
        userZoomingEnabled: true,
        userPanningEnabled: true,
        boxSelectionEnabled: false,
        minZoom: 0.5,
        maxZoom: 2
    });

    // Add hover effects
    cy.on('mouseover', 'node', function(event) {
        const node = event.target;
        if (node.id() !== 'center') {
            node.style({
                'border-color': '#0891b2',
                'border-width': 3,
                'shadow-blur': 12,
                'shadow-color': 'rgba(8, 145, 178, 0.3)'
            });
        }
    });

    cy.on('mouseout', 'node', function(event) {
        const node = event.target;
        if (node.id() !== 'center' && !node.selected()) {
            node.style({
                'border-color': '#cbd5e1',
                'border-width': 2.5,
                'shadow-blur': 8,
                'shadow-color': 'rgba(0, 0, 0, 0.08)'
            });
        }
    });
});
</script>

<template>
    <div class="graph-container">
        <div ref="container" class="quotes-graph"></div>
        <div class="graph-controls">
            <span class="control-hint">💡 Click and drag to explore • Scroll to zoom</span>
        </div>
    </div>
</template>

<style scoped>
.graph-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    border-radius: 16px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 2px solid var(--gray-200);
}

.quotes-graph {
    width: 100%;
    height: 700px;
    border-radius: 12px;
    background: white;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
}

.graph-controls {
    margin-top: 1.5rem;
    text-align: center;
}

.control-hint {
    display: inline-block;
    padding: 0.625rem 1.25rem;
    background: white;
    color: var(--color-text-light);
    font-size: 0.875rem;
    border-radius: 24px;
    border: 1px solid var(--gray-300);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
    .graph-container {
        padding: 1rem;
    }

    .quotes-graph {
        height: 500px;
    }

    .control-hint {
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
    }
}
</style>
