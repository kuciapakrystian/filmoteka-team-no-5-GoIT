const totalPages = 100;
        const buttonsToShow = 5;
        let currentPage = 1;

        const pagination = document.getElementById('pagination');

        function updatePagination() {
            pagination.innerHTML = '';

            const startPage = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
            const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

            if (startPage > 1) {
                const prevBtn = document.createElement('li');
                prevBtn.innerText = 'Prev';
                prevBtn.onclick = () => {
                    if (currentPage > 1) {
                        currentPage--;
                        updatePagination();
                    }
                };
                pagination.appendChild(prevBtn);
            }

            if (startPage > 2) {
                const firstBtn = document.createElement('li');
                firstBtn.innerText = '1';
                firstBtn.onclick = () => {
                    currentPage = 1;
                    updatePagination();
                };
                pagination.appendChild(firstBtn);

                if (startPage > 3) {
                    const ellipsis = document.createElement('li');
                    ellipsis.innerText = '...';
                    ellipsis.disabled = true;
                    pagination.appendChild(ellipsis);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                const pageBtn = document.createElement('li');
                pageBtn.innerText = i;
                if (i === currentPage) {
                    pageBtn.classList.add('active');
                }
                pageBtn.onclick = () => {
                    currentPage = i;
                    updatePagination();
                };
                pagination.appendChild(pageBtn);
            }

            if (endPage < totalPages - 1) {
                if (endPage < totalPages - 2) {
                    const ellipsis = document.createElement('li');
                    ellipsis.innerText = '...';
                    ellipsis.disabled = true;
                    pagination.appendChild(ellipsis);
                }

                const lastBtn = document.createElement('li');
                lastBtn.innerText = totalPages;
                lastBtn.onclick = () => {
                    currentPage = totalPages;
                    updatePagination();
                };
                pagination.appendChild(lastBtn);
            }

            if (endPage < totalPages) {
                const nextBtn = document.createElement('li');
                nextBtn.innerText = 'Next';
                nextBtn.onclick = () => {
                    if (currentPage < totalPages) {
                        currentPage++;
                        updatePagination();
                    }
                };
                pagination.appendChild(nextBtn);
            }
        }

        updatePagination();