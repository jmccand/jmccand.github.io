<script setup>
import quotesData from '@/assets/data/quotes.json';
</script>

<template>
    <div class="quotes-container">
        <div class="quotes-grid">
            <div v-for="(quote, index) in quotesData" :key="index" class="quote-card">
                <div class="quote-text">"{{ quote[0] }}"</div>
                <div class="quote-author">— {{ quote[1] }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quotes-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

.quotes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
}

.quote-card {
    background: white;
    border-radius: 16px;
    padding: 1.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 2px solid var(--gray-200);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.quote-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: var(--primary);
}

.quote-text {
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.7;
    font-style: italic;
    flex-grow: 1;
}

.quote-author {
    color: var(--primary);
    font-size: 0.95rem;
    font-weight: 600;
    text-align: right;
    margin-top: auto;
}

@media (max-width: 768px) {
    .quotes-container {
        padding: 1rem 0;
    }

    .quotes-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0 0.5rem;
    }

    .quote-card {
        padding: 1.25rem;
    }

    .quote-text {
        font-size: 0.95rem;
    }

    .quote-author {
        font-size: 0.875rem;
    }
}
</style>
