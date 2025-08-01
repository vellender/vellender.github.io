class Puzzle {
    constructor(catalogueNumber, title, publication, date, filename, notes) {
        this.catalogueNumber = catalogueNumber;
        this.title = title;
        this.publication = publication;
        this.date = date;
        this.filename = filename;
        this.notes = notes;
    }
}

const puzzles = [
    new Puzzle("P001", "Keep Your Distance", "Listener", "2020-05-23", "P001_keep_your_distance.pdf", "Numerical puzzle, with topical title during COVID lockdown."),
    new Puzzle("P002", "Surveying the Hoard", "Crossnumbers Quarterly", "2021-04", "P002_surveying_the_hoard.pdf", "Numerical puzzle."),
    new Puzzle("P003", "Penrose", "Magpie", "2021-08", "P003_penrose.pdf", "Numerical puzzle set on a Penrose tiling."),
    new Puzzle("P004", "Boring", "Magpie", "2023-04", "P004_boring.pdf", "My first published cryptic crossword."),
    new Puzzle("P005", "No Subtitles", "Crossword Centre", "2023-11", "P005_no_subtitles.pdf", "Published online as the monthly puzzle on <a href='http://www.crossword.org.uk'>The Crossword Centre</a>."),
    new Puzzle("P006", "Sketchy", "Magpie", "2024-05", "P006_sketchy.pdf", ""),
    new Puzzle("P007", "Petitioned King", "Enigmatic Variations", "2024-07-28", "P007_petitioned_king.pdf", "My first EV puzzle."),
    new Puzzle("P008", "Security Through Obscurity", "Magpie", "2024-09", "P008_security_through_obscurity.pdf", ""),
    new Puzzle("P009", "For Me and You", "Listener", "2024-11-16", "P009_for_me_and_you.pdf", "The publication date is of relevance to the puzzle, so may be worth noting."),
    new Puzzle("P010", "Leaders", "Magpie", "2025-03","P010_leaders.pdf",""),
    new Puzzle("P011", "Lines", "Inquisitor", "2025-04-12", "P011_lines.pdf", "My first IQ puzzle."),
    new Puzzle("P012", "Romantic Piece", "Listener", "2025-07-26", "P012_romantic_piece.pdf", "")
];

function generateTable(puzzles) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create header row
    const headers = ["Catalogue Number", "Title", "Publication", "Date", "Notes"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows for puzzles
    puzzles.forEach(puzzle => {
        const row = document.createElement('tr');

        // Catalogue Number
        const catalogueCell = document.createElement('td');
        catalogueCell.textContent = puzzle.catalogueNumber;
        row.appendChild(catalogueCell);

        // Title (hyperlink)
        const titleCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = `files/${puzzle.filename}`;
        link.textContent = puzzle.title;
        titleCell.appendChild(link);
        row.appendChild(titleCell);

        // Publication
        const publicationCell = document.createElement('td');
        publicationCell.textContent = puzzle.publication;
        row.appendChild(publicationCell);

        // Date
        const dateCell = document.createElement('td');
        dateCell.textContent = puzzle.date;
        row.appendChild(dateCell);

        // Notes
        const notesCell = document.createElement('td');
        notesCell.textContent = puzzle.notes;
        row.appendChild(notesCell);

        table.appendChild(row);
    });

    return table;
}

// Append the table to the page
const tableContainer = document.getElementById('puzzleTable');
const puzzleTable = generateTable(puzzles);
tableContainer.appendChild(puzzleTable);
