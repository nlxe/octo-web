<template>
    <article id="features" class="fern-gap">
        <div
            class="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 w-full mb-6 sm:mb-12"
        >
            <h2
                class="text-5xl sm:text-6xl text-left text-gray-700 dark:text-gray-300 font-medium leading-[3.5rem] sm:leading-[4.5rem]"
            >
                <span
                    class="text-gray-500 dark:text-gray-400 font-medium text-xl"
                    >Discover the Future</span
                ><br />
                Only the
                <span
                    class="text-gradient font-semibold from-purple-500 to-sky-400"
                    >QOL Features</span
                >
                <br />
                included
            </h2>
            <p
                class="w-full sm:w-1/2 lg:max-w-lg lg:w-full lg:pr-24 dark:text-gray-400 dark:font-medium"
            >
                <span class="inline-block mb-2"
                    >For gamers, builders, and explorers</span
                >
                <br />
                We’ve analyzed every game mode and every challenge to bring you the ultimate sandbox experience that’s better, more immersive, and packed with endless creativity.
            </p>
        </div>
        <div class="list">
            <section>
                <h3>Modernized UI</h3>
                <h4 class="text-purple-400">A fresh look for enhanced play</h4>
                <p>Experience an intuitive interface designed for ease of use,</p>
                <p>making navigation and gameplay smoother than ever. The modernized UI ensures players can quickly access features and enjoy a more immersive gaming experience.</p>
            </section>
            <section>
                <h3>New Updates & Game</h3>
                <h4 class="text-blue-400">Fresh content awaits</h4>
                <p>Blockman Forge regularly introduces exciting updates and new games,</p>
                <p>keeping the community engaged with diverse gameplay options. Explore unique challenges and innovative mechanics with each update!</p>
            </section>
            <section>
                <h3>Weekly Balancing</h3>
                <h4 class="text-teal-400">Fair play for everyone</h4>
                <p>Our dedicated team ensures that gameplay remains balanced,</p>
                <p>with weekly adjustments to character abilities and game mechanics. This commitment to fairness allows for a competitive and enjoyable environment.</p>
            </section>
            <!-- <section>
                <h3>Discord Binding</h3>
                <h4 class="text-purple-400">Connect with your community</h4>
                <p>Seamlessly integrate your Discord account with Blockman Forge,</p>
                <p>allowing for quick access to friends, chats, and community events. Stay connected and never miss out on the latest news and updates!</p>
            </section>
            <section>
                <h3>Unique Events</h3>
                <h4 class="text-blue-400">Special occasions await</h4>
                <p>Participate in exclusive in-game events that offer unique rewards,</p>
                <p>challenges, and experiences. From seasonal celebrations to themed competitions, there’s always something exciting happening in Blockman Forge!</p>
            </section> -->
        </div>
        <h5 class="text-right text-base mt-6 text-gray-400/75">
            These are the core principles behind Blockman Forge,<br />crafted to deliver the best BlockyMod experience ever.
        </h5>
    </article>
</template>

<style>
#features {
    @apply relative max-w-5xl w-full mx-auto mt-4 mb-12;

    & > .list {
        @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10;

        & > section {
            @apply relative flex flex-col w-full rounded-3xl p-6 border border-r-blue-100 border-b-purple-100 border-t-purple-200 border-l-blue-200 dark:border-r-blue-300/40 dark:border-b-purple-300/40 dark:border-t-purple-400/50 dark:border-l-blue-400/40 transform hover:-translate-y-2 transition-all ease-out duration-200 dark:text-gray-400;
            box-shadow: 0 7px 40px rgba(48, 160, 255, 0.075);

            &:hover {
                box-shadow: 0 12px 55px rgba(223, 160, 255, 0.2);
            }

            html.dark & {
                box-shadow: 0 7px 40px rgba(48, 160, 255, 0.15);

                &:hover {
                    box-shadow: 0 12px 55px rgba(223, 160, 255, 0.25);
                }
            }

            & > h3 {
                @apply text-2xl font-medium text-gray-700 dark:text-gray-300;
            }

            & > h4 {
                @apply inline-block text-base font-medium mt-0.5 mb-3 dark:text-gray-400/90;
            }

            &:nth-child(1) {
                @apply bg-white dark:bg-gray-900;
                background-image: radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 1) 70%,
                        transparent 150%
                    ),
                    radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 1) 90%,
                        transparent 150%
                    ),
                    radial-gradient(
                        at 9% 67%,
                        hsla(223, 100%, 65%, 0.14) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 22% 0%,
                        hsla(210, 100%, 69%, 0.29) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 97% 49%,
                        hsla(240, 100%, 87%, 0.35) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 100% 75%,
                        hsla(280, 100%, 75%, 0.26) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 75% 100%,
                        hsla(22, 100%, 77%, 0.19) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 40% 100%,
                        hsla(240, 100%, 70%, 0.15) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 72% 0%,
                        hsla(343, 100%, 76%, 0.17) 0px,
                        transparent 50%
                    );

                html.dark & {
                    background-image: radial-gradient(
                            closest-side at center,
                            theme(colors.gray.800) 70%,
                            transparent 150%
                        ),
                        radial-gradient(
                            at 9% 67%,
                            hsla(223, 100%, 65%, 0.14) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 22% 0%,
                            hsla(210, 100%, 69%, 0.29) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 97% 49%,
                            hsla(240, 100%, 87%, 0.35) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 100% 75%,
                            hsla(280, 100%, 75%, 0.26) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 75% 100%,
                            hsla(22, 100%, 77%, 0.19) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 40% 100%,
                            hsla(240, 100%, 70%, 0.15) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 72% 0%,
                            hsla(343, 100%, 76%, 0.17) 0px,
                            transparent 50%
                        );
                }
            }

            &:nth-child(2) {
                @apply bg-white dark:bg-gray-900;
                background-image: radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 1) 70%,
                        transparent 150%
                    ),
                    radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 1) 90%,
                        transparent 150%
                    ),
                    radial-gradient(
                        at 7% 95%,
                        hsla(223, 100%, 65%, 0.14) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 89% 10%,
                        hsla(210, 100%, 69%, 0.29) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 30% 0%,
                        hsla(240, 100%, 87%, 0.35) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 100% 54%,
                        hsla(280, 100%, 75%, 0.26) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 61% 0%,
                        hsla(22, 100%, 77%, 0.19) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 2% 48%,
                        hsla(240, 100%, 70%, 0.15) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 80% 100%,
                        hsla(343, 100%, 76%, 0.17) 0px,
                        transparent 50%
                    );

                html.dark & {
                    background-image: radial-gradient(
                            closest-side at center,
                            theme(colors.gray.800) 70%,
                            transparent 150%
                        ),
                        radial-gradient(
                            at 7% 95%,
                            hsla(223, 100%, 65%, 0.14) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 89% 10%,
                            hsla(210, 100%, 69%, 0.29) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 30% 0%,
                            hsla(240, 100%, 87%, 0.35) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 100% 54%,
                            hsla(280, 100%, 75%, 0.26) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 61% 0%,
                            hsla(22, 100%, 77%, 0.19) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 2% 48%,
                            hsla(240, 100%, 70%, 0.15) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 80% 100%,
                            hsla(343, 100%, 76%, 0.17) 0px,
                            transparent 50%
                        );
                }
            }

            &:nth-child(3) {
                @apply bg-white dark:bg-gray-900;
                background-image: radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 0.8) 70%,
                        transparent 150%
                    ),
                    radial-gradient(
                        closest-side at center,
                        rgba(255, 255, 255, 0.8) 90%,
                        transparent 150%
                    ),
                    radial-gradient(
                        at 29% 66%,
                        hsla(223, 100%, 65%, 0.14) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 47% 51%,
                        hsla(210, 100%, 69%, 0.29) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 34% 34%,
                        hsla(240, 100%, 87%, 0.35) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 74% 32%,
                        hsla(280, 100%, 75%, 0.26) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 57% 66%,
                        hsla(22, 100%, 77%, 0.19) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 42% 84%,
                        hsla(240, 100%, 70%, 0.15) 0px,
                        transparent 50%
                    ),
                    radial-gradient(
                        at 59% 10%,
                        hsla(343, 100%, 76%, 0.17) 0px,
                        transparent 50%
                    );

                html.dark & {
                    background-image: radial-gradient(
                            closest-side at center,
                            theme(colors.gray.800) 50%,
                            transparent 120%
                        ),
                        radial-gradient(
                            at 29% 66%,
                            hsla(223, 100%, 65%, 0.14) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 47% 51%,
                            hsla(210, 100%, 69%, 0.29) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 34% 34%,
                            hsla(240, 100%, 87%, 0.35) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 74% 32%,
                            hsla(280, 100%, 75%, 0.26) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 57% 66%,
                            hsla(22, 100%, 77%, 0.19) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 42% 84%,
                            hsla(240, 100%, 70%, 0.15) 0px,
                            transparent 50%
                        ),
                        radial-gradient(
                            at 59% 10%,
                            hsla(343, 100%, 76%, 0.17) 0px,
                            transparent 50%
                        );
                }
            }
        }
    }
}
</style>
