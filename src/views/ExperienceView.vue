<script setup>
</script>

<template>
    <div class="image-container">
        <img src="@/assets/images/rpi-logo.png" />
        <img src="@/assets/images/experience/mitre-logo.png" />
        <img src="@/assets/images/experience/xphealth-logo.png" />
        <img src="@/assets/images/experience/yankeetrails-logo.png" />
    </div>
    <h1>Professional Experience</h1>
    <h2>Current Position</h2>
    <p>
        <b>Intern at MITRE Corporation</b> in the Communications, Signal Intelligence, and Position, Navigation and Timing team.
    </p>
    <h2>Past Experiences</h2>
    <ul>
        <li><b>Software Engineer</b> at Yankee Trails applying IT and software solutions to modernize shuttle tracking and resource allocation.</li>
        <li><b>Software Engineering Intern</b> at XP Health building a full stack framework to integrate barcode scanners into daily operation.</li>
        <li><b>Researcher at RPI</b> implementing a multivariate leader-follower controller to coordinate transportation of heavy loads.</li>
    </ul>
</template>

<style scoped>
.title-container {
    display: flex;
    justify-content: center;
}

h1 {
    margin: 40px auto 20px auto;
    font-size: xx-large;
}

.image-container {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    gap: 20px;
}

img {
    width: 250px;
    margin: auto;
}

h2 {
    margin-top: 20px;
    font-size: large;
    font-weight: 500;
}

b {
    font-weight: 500;
}

p {
    font-size: medium;
    margin-bottom: 10px;
}

li {
    font-size: medium;
    margin: 5px;
}
</style>
