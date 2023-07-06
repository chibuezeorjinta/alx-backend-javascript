type Brand<t1, t2> = t1 & { _brand: t2 };

interface MajorCredits {
	credits: Brand<number, 'MajorCredits'>;
}

interface MinorCredits {
  credits: Brand<number, 'MinorCredits'>;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits as Brand<number, 'MajorCredits'> };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits as Brand<number, 'MinorCredits'> };
}