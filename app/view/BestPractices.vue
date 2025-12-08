<script setup>

</script>

<template>
  <section id="best-practices" class="section-padding bg-white dark:bg-dark-800">
    <div class="container-max">
      <div class="text-center pb-8" style="opacity: 1; transform: none;">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>
        <p class="text-justify text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I thought of 3 general solution strategies to handle pacing problems
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StrategyCard title="Prevention">
          <p>Modify lesson plan</p>
          <ul class="list-disc list-inside pl-6 -indent-6">
            <li>Reduce lesson volume</li>
            <li>Reorganize lesson</li>
            <li>Improve lesson quality</li>
          </ul>
        </StrategyCard>
        <StrategyCard title="Minimize Impact">
          <p>Front-load lessons</p>
          <ul class="list-disc list-inside pl-6 -indent-6">
            <li>Most important things first</li>
            <li>Less important things last</li>
          </ul>
        </StrategyCard>
        <StrategyCard title="Problem Handling">
          <p>Modify lesson delivery</p>
          <ul class="list-disc list-inside pl-6 -indent-6">
            <li>Set/Use a timer</li>
            <li>Continuation threshold</li>
          </ul>
        </StrategyCard>
      </div>

      <div class="space-y-8">
        <div class="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          style="opacity: 1; transform: none;">
          <h4 class="font-semibold text-gray-900 dark:text-white mt-2 mb-2">Minimization: Front-Loading</h4>
          <div class="text-gray-600 dark:text-gray-300 mb-4">
            <p>Simmons claims that identifying the lesson's primary learning target is the most important because it
              informs the educator on which activities should be prioritized.
              This means that the most important concepts and activities should be placed earlier in the lesson so if pacing problems do arise,
              they will not critically impact the main goal of the lesson.
            </p>
            <h4 class="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Problem Handling: Read your Audience and Adjust</h4>
            <p>
              Simmons highlights the importance of paying close attention to student behavior during the lesson for clues as to whether the pacing is too fast or too slow.
              If a teacher notices that students look confused, seem inattentive, or preoccupied, it is a sign that the pacing is not right and the teacher should adjust.
              Pacing that is too fast is usually correlated with instruction outside of a student's Zone of Proximal Development (ZPD), which is where students are able to learn most effectively.
            </p>
            <h4 class="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Prevention: Chunking to Reduce Cognitive Load</h4>
            <p>
              When the primary learning target-aligned activities are determined, the lesson can be assessed for possible chunking so that the learning objects can be understood more readily while also fitting into the allotted time.
              The practice of chunking, or breaking down larger concepts into smaller components, connects with cognitive load theory, which states that large, complex topics are difficult to
              retain because of limited working memory.
            </p>
            <h4 class="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Prevention and Minimization: Cognitive Load and Lesson Volume</h4>
            <p>
              Rather than overloading a lesson with content and risk exceeding a student's cognitive load, Simmons recommends including time in the lesson plan for formative assessments to check for understanding.
              This can help with pacing indirectly by capturing student thinking early on in the lesson and giving the educator the opportunity to refocus student learning if necessary.
              Without periodic checks for understanding, student confusion can grow, making the educator's task to reestablish understanding much larger and time consuming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>