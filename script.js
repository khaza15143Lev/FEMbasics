document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.illustration-container').forEach(container => {
        const buttons = container.querySelectorAll('.controls button');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const action = button.dataset.action; 
                const targetSelector = button.dataset.targetSelector; 
                const animationClass = action.replace('animate-', ''); 

                const targetElement = container.querySelector(targetSelector);
                
                if (!targetElement) {
                    console.error('Target element not found:', targetSelector);
                    return;
                }

                // Determine which animation classes to remove based on the target and action
                const allTranslationClasses = ['x-translation', 'y-translation', 'z-translation'];
                const allRotationClasses = ['x-rotation', 'y-rotation', 'z-rotation'];

                if (allTranslationClasses.includes(animationClass)) {
                    // If a translation is triggered, remove all translation classes from this target
                    allTranslationClasses.forEach(cls => targetElement.classList.remove(cls));
                } else if (allRotationClasses.includes(animationClass)) {
                    // If a rotation is triggered, remove all rotation classes from this target
                    allRotationClasses.forEach(cls => targetElement.classList.remove(cls));
                }

                // Force reflow to ensure the animation restarts even if rapidly clicked
                void targetElement.offsetWidth; 

                // Add the new animation class
                targetElement.classList.add(animationClass);
            });
        });
    });
});