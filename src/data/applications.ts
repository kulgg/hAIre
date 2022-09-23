export interface ScoredSentence {
	text: string;
	score: number;
}

export interface Application {
	id: string;
	position: string;
	positionId: string;
	data: {
		grammarScore: number;
		content: {
			skills: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
			education: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
			pastWork: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
		};
	};
}

const applications: Application[] = [
	{
		id: "1237",
		position: "Junior Software Engineer",
		positionId: "12",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					positiveSentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.4,
						},
					],
					negativeSentences: [
						{
							text: "Missing: Docker",
							score: 0.3,
						},
						{
							text: "Missing: TypeScript",
							score: 0.4,
						},
					],
				},
				education: {
					positiveSentences: [
						{
							text: "studied computer science at MIT",
							score: 0.4,
						},
					],
					negativeSentences: [],
				},
				pastWork: {
					positiveSentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.3,
						},
					],
					negativeSentences: [],
				},
			},
		},
	},
];

const getApplicationById = (id: string): Application | undefined => {
	return applications.find((x) => x.id === id);
};

export default applications;
export { getApplicationById };
