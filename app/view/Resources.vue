<script setup>

</script>

<template>
  <section id="resources" class="section-padding bg-white dark:bg-dark-900">
    <div class="container-max">
      <div class="text-center pb-8" style="opacity: 1; transform: none;">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Solution Strategies</h2>
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
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <a href="https://www.ascd.org/el/articles/pacing-lessons-for-optimal-learning" target="_blank"
              class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2">
              <span>Pacing Lessons for Optimal Learning</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <p>by: Craig simmons</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 mb-4">
            <p>Simmons claims that identifying the lesson's primary learning target is the most important because it
              informs
              the educator on which activities should be prioritized and placed earlier in the lesson with enough time
              preferentially allocated.
            </p>
            <h4 class="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Prevention: Chunking to Reducing the
              Cognitive Load</h4>
            <p>
              When the primary learning target-aligned activities are determined, the lesson can
              be assessed for possible chunking so that the learning objects can be understood more readily while also
              fitting into the allotted time. The practice of chunking, or breaking down larger concepts into smaller
              components, connects with cognitive load theory, which states that large, complex topics are difficult to
              retain because of limited working memory.
            </p>
            <h4 class="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Prevention and Minimization: Assessments over Volume</h4>
            <p>
              Building upon that theory, Simmons also warns against overloading a
              lesson and recommends including time in the lesson plan for formative assessments to check for
              understanding.
              This can help with pacing indirectly by capturing student thinking early on in the lesson and giving the
              educator the opportunity to refocus student learning if necessary. Without periodic checks for
              understanding,
              student confusion can grow, making the educator's task to reestablish understanding much larger and time
              consuming.
            </p>
            <p>
              Adapting this into my future lesson planning, I will look for opportunities where I can break down
              complex concepts into smaller steps.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-4">
        <ScrollDownButton target="#best-practices" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
