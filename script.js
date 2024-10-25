function openResume() {
    const resumePath = 'resume.pdf'; // Update this path
    window.open(resumePath, '_blank');
}

document.getElementById('resumeButton').addEventListener('click', openResume);
